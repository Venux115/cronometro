import  { useEffect, useState } from "react";

interface StopwatchProps {
    counter?: number;
}

export default function Stopwatch({ counter = 0 }: StopwatchProps) {
    const [timer, setTimer] = useState<string>("");

    useEffect(() => {
        const totalMilliseconds = counter * 1000;
        const hours = Math.floor(totalMilliseconds / 3600000).toString().padStart(2, "0");
        const minutes = Math.floor((totalMilliseconds % 3600000) / 60000).toString().padStart(2, "0");
        const seconds = Math.floor((totalMilliseconds % 60000) / 1000).toString().padStart(2, "0");

        setTimer(`${hours}:${minutes}:${seconds}`);
    }, [counter]);

    return <span>{timer}</span>;
}

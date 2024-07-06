import React, { useState, useEffect } from "react";
import Button from "../Button/Button.tsx";
import Stopwatch from "../stopwatch/Stopwatch.tsx";

export default function Box() {
    const [counter, setCounter] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    function startHandleClick() {
        console.log("Aoba")
        if (intervalId) {
            clearInterval(intervalId);
        }

        const id = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        setIntervalId(id);
    }

    function pauseHandleClick() {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    function stopHandleClick() {
        setCounter(0);

        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    }

    return (
        <>
            <h1>Cronômetro</h1>
            <Stopwatch counter={counter} />
            <div className="button-container">
                <Button onClick={startHandleClick} title="Iniciar" />
                <Button onClick={pauseHandleClick} title="Pausar" />
                <Button onClick={stopHandleClick} title="Reiniciar" />
            </div>
        </>
    );
}

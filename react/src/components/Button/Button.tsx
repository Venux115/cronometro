interface ButtonProps {
    title: string;
    onClick: () => void;
}

export default function Button ({onClick, title}:ButtonProps) {
    return (
        <button type='button' onClick={onClick}>
            <span>{title}</span>
        </button>

    )
}
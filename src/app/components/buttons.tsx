import { JSX } from "react"

type IconBtnProps = {
    icon: JSX.Element;
    onClick: () => void;
}

export function IconButton({ icon, onClick }: IconBtnProps) {
    return (
        <button onClick={onClick} className="rounded hover:bg-gray-300 w-8 h-8">
            {icon}
        </button>
    )
}

type TextBtnProps = {
    text: string;
    className: string;
    onClick: () => void;
}

export function TextButton({ text, className, onClick }: TextBtnProps) {
    return (
        <button onClick={onClick} className={"rounded h-8 pl-4 pr-4 items-center " + className}>
            {text}
        </button>
    )
}
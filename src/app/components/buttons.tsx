'use client'

import { JSX } from "react"

type IconBtnProps = {
    icon: JSX.Element;
    className: string;
    onClick: () => void;
}

export function IconButton({ icon, className, onClick }: IconBtnProps) {
    return (
        <button onClick={onClick} className={"rounded w-8 h-8 hover:cursor-pointer " + className}>
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
        <button onClick={onClick} className={"rounded h-8 pl-4 pr-4 items-center hover:cursor-pointer " + className}>
            {text}
        </button>
    )
}
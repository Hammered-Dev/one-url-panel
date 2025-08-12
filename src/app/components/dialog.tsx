"use client"

import { useSearchParams } from "next/navigation"
import { JSX, useEffect, useRef } from "react"

type Props = {
    title: string,
    onClose: () => void,
    onComfirm: () => void,
    children: React.ReactNode
}

export default function Dialog({ title, onClose, onComfirm, children }: Props) {
    const params = useSearchParams();
    const ref = useRef<HTMLDialogElement | null>(null);

    const showDialog = params.get("dialog");

    useEffect(
        () => {
            if (showDialog === 'true') {
                ref.current?.showModal();
            } else {
                ref.current?.close();
            }
        }, [showDialog]
    )

    const close = () => {
        ref.current?.close();
        onClose();
    }

    const comfirm = () => {
        ref.current?.close();
        onComfirm();
    }

    const dialog: JSX.Element | null = showDialog === "true"
        ? (
            <dialog ref={ref} className="w-3xl rounded-2xl self-center place-self-center">
                <div className="flex flex-col">
                    <div className="p-2 pl-3">
                        <h1 className="text-xl">{title}</h1>
                    </div>
                    <div>{children}</div>
                    <div className="flex flex-row justify-end mr-1">
                        <button onClick={comfirm} className="m-1 rounded-xl hover:bg-black/10 p-2 hover:cursor-pointer">
                            Comfirm
                        </button>
                        <button onClick={close} className="m-1 rounded-xl hover:bg-red-300 p-2 hover:cursor-pointer">
                            Close
                        </button>
                    </div>
                </div>
            </dialog>
        ) : null;

    return dialog
}
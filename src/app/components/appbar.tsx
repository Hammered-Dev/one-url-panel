'use client'

import { JSX } from "react"
import Image from "next/image"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton, TextButton } from "./buttons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

type Props = {
    title: string
    leading_icon: string
    actions: JSX.Element
}

export default function AppBar({ title, leading_icon, actions }: Props) {
    return (
        <header className="flex items-center justify-between gap-4 rounded-2xl p-2 m-1 shadow-lg outline outline-black/5 dark:outline-white/5 dark:bg-slate-800 dark:outline-offset-1 dark:shadow-none">
            <div className="flex items-center gap-4 ml-1">
                <Image src={leading_icon} alt="The app icon" width={32} height={32} />
                <h1 className="text-2xl">
                    {title}
                </h1>
            </div>
            {actions}
        </header>
    )
}

export function HomeAppBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const path = usePathname()

    const showDialog = () => {
        const params = new URLSearchParams(searchParams)
        params.set('dialog', 'true')
        router.replace(`${path}?${params.toString()}`)
    }
    return (
        <AppBar
            title={""}
            leading_icon={"/ou.svg"}
            actions={
                <div className="gap-1 flex flex-row">
                    <TextButton
                        text={"Create"}
                        onClick={() => showDialog()}
                        className={"bg-green-300 hover:bg-green-500"} />
                    <IconButton
                        icon={
                            <FontAwesomeIcon
                                icon={faGear} />
                        }
                        onClick={() => { }} />
                </div>
            } />
    )
}
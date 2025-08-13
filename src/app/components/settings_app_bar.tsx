'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBar from "./appbar"
import { IconButton } from "./buttons"
import { useRouter } from "next/navigation"
import { faHouse } from "@fortawesome/free-regular-svg-icons"

export function SettingsAppBar() {
    const router = useRouter()
    return (
        <AppBar
            title='Settings'
            leading_icon={"/ou.svg"}
            actions={<IconButton
                icon={<FontAwesomeIcon icon={faHouse} />}
                className={"hover:bg-gray-300 dark:hover:bg-slate-500"}
                onClick={() => router.back()} />
            } />
    )
}
'use client'

import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import AppBar from "./appbar"
import { TextButton, IconButton } from "./buttons"

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
            title={"OneUrl"}
            leading_icon={"/ou.svg"}
            actions={
                <div className="gap-1 flex flex-row">
                    <TextButton
                        text={"Create"}
                        onClick={() => showDialog()}
                        className={"bg-green-300 hover:bg-green-500 dark:bg-green-700"} />
                    <IconButton
                        icon={<FontAwesomeIcon
                            icon={faGear} />}
                        onClick={() => { router.push('/settings') }}
                        className={"hover:bg-gray-300 dark:hover:bg-slate-500"} />
                </div>
            } />
    )
}
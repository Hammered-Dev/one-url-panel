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
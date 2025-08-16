'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AppBar from "./appbar"
import { useRouter } from "next/navigation"
import { faHouse } from "@fortawesome/free-regular-svg-icons"
import { Button, NavbarContent } from "@heroui/react"

export function SettingsAppBar() {
    const router = useRouter()
    return (
        <AppBar
            title='Settings'
            leading_icon={"/ou.svg"}
            actions={
                <NavbarContent justify="end">
                    <Button isIconOnly onPress={() => router.back()}>
                        <FontAwesomeIcon icon={faHouse} />
                    </Button>
                </NavbarContent>
            } />
    )
}
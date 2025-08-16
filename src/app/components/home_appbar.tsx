'use client'

import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import AppBar from "./appbar"
import { Button, NavbarContent, useDisclosure } from "@heroui/react"
import AddURlModal from "./add_url_modal"

export function HomeAppBar({ api_url }: { api_url: string }) {
    const router = useRouter()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <AppBar
                title={"OneUrl"}
                leading_icon={"/ou.svg"}
                actions={<NavbarContent justify="end">
                    <Button color="primary" onPress={onOpen}>Create</Button>
                    <Button onPress={() => router.push('/settings')} isIconOnly>
                        <FontAwesomeIcon icon={faGear} />
                    </Button>
                </NavbarContent>} />
            <AddURlModal isOpen={isOpen} onOpenChange={onOpenChange} api_url={api_url} />
        </>
    )
}
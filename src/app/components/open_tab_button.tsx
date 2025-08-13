'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconButton } from "./buttons"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default function OpenTabButton({ link }: { link: string }) {
    const openTab = () => {
        window.open(link)
    }

    return (
        <IconButton icon={<FontAwesomeIcon icon={faLink} />} onClick={openTab} className="" />
    )
}
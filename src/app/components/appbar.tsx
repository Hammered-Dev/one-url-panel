'use client'

import { JSX } from "react"
import Image from "next/image"
import { Navbar, NavbarBrand, NavbarItem } from "@heroui/react"

type Props = {
    title: string
    leading_icon: string
    actions: JSX.Element
}

export default function AppBar({ title, leading_icon, actions }: Props) {
    return (
        <Navbar>
            <NavbarBrand className="gap-1">
                <Image src={leading_icon} width={36} height={36} alt="logo" />
                <p className="text-2xl">{title}</p>
            </NavbarBrand>
            {actions}
        </Navbar>
    )
}

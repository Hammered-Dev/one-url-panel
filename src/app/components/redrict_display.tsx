'use client'

import { Card, CardBody, CardHeader, Divider, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react"

export default function RedirctDisplay({ link, target }: { link: string, target: string }) {
    const [rdDelay, setRdDelay] = useState(3000)
    const [location, setLocation] = useState("")
    useEffect(() => {
        axios.get(`${link}/settings`)
            .then((value) => {
                setRdDelay(Number(value.data.delay))
            })
            .catch((e) => console.log(e))
        axios.get(`${link}/rd/${target}`)
            .then((value) => {
                setLocation(value.data.location)
                const timer = setTimeout(() => {
                    window.location.replace(value.data.location);
                }, rdDelay);

                return () => clearTimeout(timer);
            })
    }, [link, rdDelay, target])

    return (
        <Card className="w-3xs" fullWidth>
            <CardHeader className="flex flex-row gap-4">
                <Image src={"/ou.svg"} height={32} width={32} alt="Logo" />
                <p className="text-medium">Redirecting</p>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{location}</p>
            </CardBody>
        </Card>
    )
}
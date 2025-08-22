'use client'

import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { SettingsBottomBar } from "../components/settings_bottom_bar"
import { useRouter } from "next/navigation"
import { Input } from "@heroui/react"
import { ApiContext } from "../providers"

export function SettingBody() {
    const [delay, setDelay] = useState("3000")
    const router = useRouter()
    const data = useContext(ApiContext)

    useEffect(() => {
        axios.get(`${data.API_URL}/settings`)
            .then((value) => setDelay(value.data.delay))
            .catch((e) => console.log(e))
    }, [data])

    return (
        <>
            <div className="flex flex-row justify-between m-5 items-center h-full grow w-2xl self-center place-self-center">
                <Input
                    value={delay}
                    onChange={(e) => setDelay(e.target.value)}
                    label="Redirection delay (ms)"
                    labelPlacement="outside-left"
                />
            </div>
            <SettingsBottomBar onSaveClick={() => {
                axios.put(`${data.API_URL}/settings`, { 'delay': delay })
                    .then(() => router.back())
                    .catch((e) => console.log(e))
            }} />
        </>
    )
}
'use client'

import axios from "axios"
import { useEffect, useState } from "react"
import { SettingsBottomBar } from "../components/settings_bottom_bar"
import { useRouter } from "next/navigation"

export function SettingBody({ api_url }: { api_url: string }) {
    const [delay, setDelay] = useState("3000")
    const router = useRouter()

    useEffect(() => {
        axios.get(`${api_url}/settings`)
            .then((value) => setDelay(value.data.delay))
            .catch((e) => console.log(e))
    }, [api_url])

    return (
        <>
            <div className="flex flex-row justify-evenly m-5 items-center h-full grow">
                Redirection delay (ms)
                <input className="outline-black/15 rounded-md border-black/15 border p-1" type="number" value={delay} onChange={(event) => setDelay(event.target.value)}></input>
            </div>
            <SettingsBottomBar onSaveClick={() => {
                axios.put(`${api_url}/settings`, { 'delay': delay })
                    .then(() => router.back())
                    .catch((e) => console.log(e))
            }} />
        </>
    )
}
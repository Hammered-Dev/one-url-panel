'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export function SettingBody({ api_url }: { api_url: string }) {
    const [delay, setDelay] = useState(3000)

    useEffect(() => {
        axios.get(`${api_url}/settings`)
            .then((value) => setDelay(value.data.delay))
            .catch((e) => console.log(e))
    })

    return (
        <div>{delay}</div>
    )
}
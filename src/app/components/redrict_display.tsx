'use client'

import axios from "axios";
import { useEffect, useState } from "react"

export default function RedirctDisplay({ link, target }: { link: string, target: string }) {
    const [rdDelay, setRdDelay] = useState(3000)
    useEffect(() => {
        axios.get(`${link}/settings`)
            .then((value) => {
                setRdDelay(Number(value.data.delay))
            })
            .catch((e) => console.log(e))
        axios.get(`${link}/rd/${target}`)
            .then((value) => {
                const timer = setTimeout(() => {
                    window.location.replace(value.data.location);
                }, rdDelay);

                return () => clearTimeout(timer);
            })
    }, [link, rdDelay, target])

    return <div className="text-2xl">Redirecting...</div>;
}
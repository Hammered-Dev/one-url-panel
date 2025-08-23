'use client'

import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useContext, useEffect, useState } from "react"
import { ApiContext } from "../providers"
import { get_token } from "./get_token"

export default function AuthCallbackPage() {
    const params = useSearchParams()
    const [error, setError] = useState(false)
    const data = useContext(ApiContext)

    useEffect(() => {
        if (!params.get("code")) {
            setError(true)
        } else {
            const pkce_verifier = sessionStorage.getItem("pkce_verifier");
            const currentUrl = window.location.href;
            const state = sessionStorage.getItem("state")
            if (!pkce_verifier || !state) {
                setError(true)
                return
            }
            setTimeout(() => {
                get_token(pkce_verifier, currentUrl, state)
            })
        }
    }, [data.API_URL, params])

    return (
        <>
            {error ? <div className="h-screen w-screen flex flex-col justify-center items-center">
                <p>Error</p>
            </div> : <div className="h-screen w-screen flex flex-col justify-center items-center">
                <Image src="/ou.svg" alt="" width={128} height={128} />
                <p>Processing Authentication</p>
            </div>}
        </>
    )
}
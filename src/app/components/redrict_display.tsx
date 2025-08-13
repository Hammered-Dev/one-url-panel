'use client'

import { useEffect } from "react"

export default function RedirctDisplay({ link, delay }: { link: string, delay: number }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.replace(link);
        }, delay);

        return () => clearTimeout(timer);
    })

    return <div className="text-2xl">Redirecting...</div>;
}
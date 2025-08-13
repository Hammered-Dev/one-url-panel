'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Dialog from "./dialog";
import { useEffect, useState } from "react";

export default function AddUrlDialog() {
    const [target, setTarget] = useState("")
    const [location, setLocation] = useState("")

    const router = useRouter()
    const path = usePathname()
    const params = useSearchParams()

    const closeDialog = () => {
        router.replace(`${path}`)
    }

    useEffect(() => {
        if (params.get('edit') === 'true') {
            setTarget(params.get('target') ?? "")
            setLocation(params.get('location') ?? "")
        }
    }, [params])

    return (
        <Dialog title={"New Url"}
            onClose={() => closeDialog()}
            onComfirm={() => closeDialog()}>
            <div className="ml-3 mr-3 flex flex-col gap-1">
                <div className="flex flex-row gap-2 items-center">
                    Target
                    <input
                        value={target}
                        onChange={(event) => setTarget(event.target.value)}
                        className="w-full rounded-md border-transparent outline-transparent bg-gray-300 p-1">
                    </input>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    Location
                    <input
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        className="w-full rounded-md border-transparent outline-transparent bg-gray-300 p-1">
                    </input>
                </div>
            </div>
        </Dialog>
    )
}
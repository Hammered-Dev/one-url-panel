'use client'
import { JSX } from "react"
import AppBar from "./appbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
    urlItems: JSX.Element;
}


function HomeAppBar() {
    const searchParams = useSearchParams()
    const route = useRouter()
    const path = 
    function updateParams(key: string, value: string | null) {
        const params = new URLSearchParams(searchParams);
        if (!value) {
            params.delete(key)
        } else {
            params.set(key, value)
        }
        route.replace(`${path}?${params.toString()}`)
    }

    return (
        <AppBar title='OneUrl' leading_icon='/ou.svg' actions={
            <div className='flex items-center gap-3'>
                <button onClick={() => updateParams('dialog', 'true')} className='flex items-center gap-1.5 text-black/75 dark:text-white/85 rounded-md h-8 bg-green-200 dark:bg-green-700 pr-2 pl-2 hover:bg-green-400 dark:hover:bg-green-500 hover:cursor-pointer'>
                    <FontAwesomeIcon icon={faPlus} />
                    Create
                </button>
                <button onClick={() => console.log('setting')} className="rounded w-8 h-8 hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-slate-600">
                    <FontAwesomeIcon icon={faGear} />
                </button>
            </div>
        } />
    )
}

export default function HomeBody({ urlItems }: Props) {
    return (
        <AppBar />
    )
}
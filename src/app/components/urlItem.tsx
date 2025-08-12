'use client'

import { faLink, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

type Props = {
    target: string | undefined;
    location: string | undefined;
}

export default function UrlItem({ target, location }: Props) {
    function delete_record() {
        if (target) {
            const target_array = target.split('/')
            axios.delete(`${process.env.API_URL}/manage/urls/${target_array[target_array.length - 1]}`)
                .catch((e) => console.log(e))
                .finally(() => { })
        }
    }

    function openTab() {
        window.open(target, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="flex flex-row items-center w-full p-2 border-b border-b-black/15">
            <button onClick={() => openTab()} className="flex items-center mr-1 h-8 w-8 rounded hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-slate-700">
                <FontAwesomeIcon icon={faLink} className="m-2" />
            </button>
            <div className="w-full">
                {target}
            </div>
            <div className="w-full">
                {location}
            </div>
            <div className="flex flex-row gap-3">
                <button className="h-8 w-8 rounded hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-slate-700">
                    <FontAwesomeIcon icon={faPen} />
                </button>
                <button onClick={() => delete_record()} className="h-8 w-8 rounded hover:bg-red-200 hover:cursor-pointer dark:hover:bg-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}
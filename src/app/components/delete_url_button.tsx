'use client'

import { IconButton } from "./buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DeleteUrlButton({ api_url }: { api_url: string }) {
    const params = useSearchParams();
    const router = useRouter();
    const path = usePathname();

    const reload = () => {
        const sparams = new URLSearchParams(params);
        sparams.set('r', 't');
        router.replace(`${path}?${sparams.toString()}`);
        router.replace(path)
    }

    return (
        <IconButton
            icon={<FontAwesomeIcon icon={faTrash} />}
            className={"hover:bg-red-300 dark:hover:bg-red-500"}
            onClick={() => {
                axios.delete(api_url);
                reload()
            }} />
    )
}
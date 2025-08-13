'use client'

import { faLink, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteUrlButton from "./delete_url_button";
import { IconButton } from "./buttons";

type Props = {
    target: string | undefined;
    location: string | undefined;
}

export default function UrlItem({ target, location }: Props) {
    function getTarget() {
        const target_array = target?.split('/')
        return target_array ? target_array[target_array.length - 1] : ""
    }

    function openTab() {
        window.open(target, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="flex flex-row items-center w-full p-2 border-b border-b-black/15 gap-1">
            <IconButton
                onClick={() => openTab()}
                icon={<FontAwesomeIcon icon={faLink} className="m-2" />}
                className="hover:bg-gray-300 justify-center flex"
            />
            <div className="w-full">
                {target}
            </div>
            <div className="w-full">
                {location}
            </div>
            <div className="flex flex-row gap-3">
                <IconButton
                    icon={<FontAwesomeIcon icon={faPen} />}
                    className={"hover:bg-gray-300"}
                    onClick={function (): void {
                        throw new Error("Function not implemented.");
                    }} />
                <DeleteUrlButton target={getTarget()} onDelete={() => { }} />
            </div>
        </div>
    )
}
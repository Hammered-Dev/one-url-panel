'use client'

import DeleteUrlButton from "./delete_url_button";
import OpenTabButton from "./open_tab_button";

type Props = {
    target: string | undefined;
    location: string | undefined;
    api_url: string;
}

export default function UrlItem({ target, location, api_url }: Props) {
    const target_array = target?.split('/')
    const target_id = target_array ? target_array[target_array.length - 1] : ""

    return (
        <div className="flex flex-row items-center w-full p-2 border-b border-b-black/15 gap-1 dark:border-b-white/25">
            <div>
                <OpenTabButton link={`rd/${target}`} />
            </div>
            <div className="w-full">
                {target}
            </div>
            <div className="w-full">
                {location}
            </div>
            <div className="flex flex-row gap-3">
                <DeleteUrlButton api_url={`${api_url}/manage/urls/${target_id}`} />
            </div>
        </div>
    )
}
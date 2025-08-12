import { faLink, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    target: string | undefined;
    location: string | undefined;
}

export default function UrlItem({ target, location }: Props) {
    return (
        <div className="flex flex-row items-center w-full p-2 border-b border-b-black/15">
            <FontAwesomeIcon icon={faLink} className="m-2" />
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
                <button className="h-8 w-8 rounded hover:bg-red-200 hover:cursor-pointer dark:hover:bg-red-500">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </div>
    )
}
import DeleteUrlButton from "./delete_url_button";

type Props = {
    target: string | undefined;
    location: string | undefined;
}

export default async function UrlItem({ target, location }: Props) {
    const target_array = target?.split('/')
    const target_id = target_array ? target_array[target_array.length - 1] : ""

    return (
        <div className="flex flex-row items-center w-full p-2 border-b border-b-black/15 gap-1">
            <div className="w-full">
                {target}
            </div>
            <div className="w-full">
                {location}
            </div>
            <div className="flex flex-row gap-3">
                <DeleteUrlButton api_url={`${process.env.API_URL}/manage/urls/${target_id}`} />
            </div>
        </div>
    )
}
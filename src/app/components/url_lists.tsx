import axios from "axios";
import UrlItem from "./urlItem";
import { env } from "next-runtime-env";

export default async function UrlList() {
    try {
        const data = await axios.get(`${env('API_URL')}/manage/urls`);
        const urls = data.data.urls
        interface Url {
            target: string;
            location: string;
        }

        return (
            <div className="p-2">
                {
                    urls.map((value: Url) => {
                        return (
                            <UrlItem
                                key={value.target}
                                target={value.target}
                                location={value.location} />
                        )
                    })
                }
            </div>
        )
    } catch (error) {
        return (
            <div>{`${error}`}</div>
        )
    }
}
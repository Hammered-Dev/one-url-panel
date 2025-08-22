'use client'

import axios from "axios";
import UrlItem from "./urlItem";
import { JSX, useContext, useEffect, useState } from "react";
import { ApiContext } from "../providers";

export default function UrlList() {
    const [urls, setUrls] = useState<JSX.Element | null>(null)
    const [trigger, setTrigger] = useState(0)
    const data = useContext(ApiContext)
    interface Url {
        target: string;
        location: string;
    }

    useEffect(() => {
        axios.get(`${data.API_URL}/manage/urls`)
            .then((value) => {
                setUrls(
                    <div className="p-2 grid-cols-2 gap-4 flex justify-center">
                        {
                            value.data.urls.map((value: Url) => {
                                return (
                                    <UrlItem
                                        key={value.target}
                                        target={value.target}
                                        location={value.location}
                                        api_url={data.API_URL}
                                        onDelete={() => setTrigger(trigger + 1)}
                                    />
                                )
                            })
                        }
                    </div>
                )
            })
            .catch((error) => {
                console.log(error)
                if (error instanceof AggregateError) {
                    setUrls(<div>{error.message}</div>)
                } else {
                    setUrls(<div>{`${error}`}</div>)
                }
            })
    }, [data.API_URL, trigger])
    return urls;
}
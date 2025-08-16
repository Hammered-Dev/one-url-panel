'use client'

import axios from "axios";
import UrlItem from "./urlItem";
import { JSX, useEffect, useState } from "react";

export default function UrlList({ api_url }: { api_url: string }) {
    const [urls, setUrls] = useState<JSX.Element | null>(null)
    const [trigger, setTrigger] = useState(0)
    interface Url {
        target: string;
        location: string;
    }

    useEffect(() => {
        axios.get(`${api_url}/manage/urls`)
            .then((value) => {
                setUrls(
                    <div className="p-2 grid-cols-2 gap-4 flex">
                        {
                            value.data.urls.map((value: Url) => {
                                return (
                                    <UrlItem
                                        key={value.target}
                                        target={value.target}
                                        location={value.location}
                                        api_url={api_url}
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
    }, [api_url, trigger])
    return urls;
}
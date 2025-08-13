'use client'

import axios from "axios";
import UrlItem from "./urlItem";
import { JSX, useEffect, useState } from "react";

export default function UrlList({ api_url }: { api_url: string }) {
    const [urls, setUrls] = useState<JSX.Element | null>(null)
    interface Url {
        target: string;
        location: string;
    }

    useEffect(() => {
        axios.get(`${api_url}/manage/urls`)
            .then((value) => {
                setUrls(
                    <div>
                        {
                            value.data.urls.map((value: Url) => {
                                return (
                                    <UrlItem
                                        key={value.target}
                                        target={value.target}
                                        location={value.location}
                                        api_url={api_url}
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
    }, [])
    return urls;
}
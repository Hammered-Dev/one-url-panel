'use server'

import axios from "axios"

export interface Urls {
    target: string;
    location: string;
}

type UrlsRecord = {
    target: string;
    location: string;
}

export async function getUrls(): Promise<UrlsRecord[]> {
    let records: UrlsRecord[] = []
    axios.get(`${process.env.API_URL}/manage/urls`)
        .then((data) => {
            const urls: Urls[] = data.data.urls;
            records = urls;
        }
        )
        .catch((e) => { throw new Error(e) })
    return records;
}

export async function deleteUrl(onSuccess: () => void, target: string) {
    axios.delete(`${process.env.API_URL}/manage/urls/${target}`)
        .then(() => {
            onSuccess()
        }
        )
        .catch((e) => { throw new Error(e) })
}

export async function newUrls(target: string, location: string, onSuccess: () => void) {
    axios.post(`${process.env.API_URL}/manage/urls`, { "target": target, "location": location })
        .then(() => {
            onSuccess()
        }
        )
        .catch((e) => { throw new Error(e) })
}

export async function BaseUrl() {
    return <div>{`${process.env.API_URL}`}</div>
}
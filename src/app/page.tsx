"use client"

import axios, { AxiosResponse } from "axios";
import process from "process";
import Image from 'next/image';
import React, { useEffect, useState } from "react";
import "./globals.css"

function UrlList() {
  const [data, setData] = useState<AxiosResponse | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setloading] = useState(true);

  useEffect(
    () => {
      const fetch = async () => {
        const url = `${process.env.API_HOST}:${process.env.API_PORT}/manage/urls`
        try {
          const response = await axios.get(url);
          setData(response.data)
        } catch (err) {
          setError(err)
          console.log(url)
        } finally {
          setloading(false)
        }
      }

      fetch()
    }, []
  )

  if (loading) {
    return (
      <div className="items-center max-w-sm">
        Loading...
      </div>
    )
  } else if (error) {
    return (
      <div className="items-center max-w-sm">
        Error(s) has occurs: {`${error}`}
      </div>
    )
  } else {
    return (
      <div>
        {`${data}`}
      </div>
    )
  }
}

export default function Home() {
  return (
    <>
      <header className="flex items-center gap-4 rounded-2xl p-2 m-1 shadow-lg outline outline-black/5 dark:outline-white/5 dark:bg-slate-800 dark:outline-offset-1 dark:shadow-none">
        <Image src={"/ou.svg"} alt="The app icon" width={32} height={32}></Image>
        <h1 className="text-2xl">
          OneUrl
        </h1>
      </header>
      <UrlList></UrlList>
    </>
  );
}

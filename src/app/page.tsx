"use client"

import Image from 'next/image';
import React, { JSX, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./globals.css"
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Home() {
  const [urlItems, setUrlItems] = useState<JSX.Element | null>(null)

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL

    if (!API_URL) {
      setUrlItems(<div>API url undefined</div>)
    }

    axios.get(`${API_URL}/manage/urls`).then(
      (data) => {
        const urls: Array<Map<string, string>> = data.data.urls
        console.log(urls)
        setUrlItems(
          <div>
            {urls.map(value => (
              <div key={value.target}>
                {value.location}
              </div>
            ))}
          </div>
        )
      }
    ).catch((e) => setUrlItems(<div>{`${e}`}</div>))
  }, [])

  return (
    <>
      <header className="flex items-center justify-between gap-4 rounded-2xl p-2 m-1 shadow-lg outline outline-black/5 dark:outline-white/5 dark:bg-slate-800 dark:outline-offset-1 dark:shadow-none">
        <div className="flex items-center gap-4 ml-1">
          <Image src={"/ou.svg"} alt="The app icon" width={32} height={32} />
          <h1 className="text-2xl">
            OneUrl
          </h1>
        </div>
        <div className='flex items-center gap-3'>
          <button className='flex items-center gap-1.5 text-black/75 rounded-md h-8 bg-green-200 pr-2 pl-2 hover:bg-green-400 hover:cursor-pointer'>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </button>
          <button className="rounded w-8 h-8 hover:bg-gray-300 hover:cursor-pointer">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      </header>
      <div className='m-1'>
        {urlItems}
      </div>
    </>
  );
}
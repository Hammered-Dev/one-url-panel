"use client"

import Image from 'next/image';
import React, { JSX, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./globals.css"
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Dialog from './components/dialog';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AppBar from './components/appbar';

export default function Home() {
  const [urlItems, setUrlItems] = useState<JSX.Element | null>(null)
  const [targetUrl, setTargetUrl] = useState<string>("")
  const route = useRouter()
  const searchParams = useSearchParams()
  const path = usePathname()

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

  function updateParams(key: string, value: string | null) {
    const params = new URLSearchParams(searchParams);
    if (!value) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    route.replace(`${path}?${params.toString()}`)
  }

  function comfirmDialog() {
    updateParams('dialog', null)
    route.refresh()
    setTargetUrl("")
  }

  function closeDialog() {
    updateParams('dialog', null)
    setTargetUrl("")
  }

  const handleChange = (event) => {
    setTargetUrl(event.target.value);
  };

  return (
    <>
      <Dialog title='te' onClose={() => closeDialog()} onComfirm={() => comfirmDialog}>
        <div className='m-3 gap-3 flex flex-col items-center'>
          <div className='flex flex-row items-center w-full g-3'>
            <div>Target:</div>
            <div className='flex flex-row w-full items-center gap-2 ml-2 outline rounded-md pl-1 outline-black/15'>
              <div>
                {`${process.env.NEXT_PUBLIC_API_URL}`}/rd/
              </div>
              <input onChange={handleChange} value={targetUrl} className='w-full outline-transparent p-1 pl-2 rounded-md bg-black/10'></input>
            </div>
          </div>
        </div>
      </Dialog>
      <AppBar title='OneUrl' leading_icon='/ou.svg' actions={
        <div className='flex items-center gap-3'>
          <button onClick={() => updateParams('dialog', 'true')} className='flex items-center gap-1.5 text-black/75 rounded-md h-8 bg-green-200 pr-2 pl-2 hover:bg-green-400 hover:cursor-pointer'>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </button>
          <button onClick={() => console.log('setting')} className="rounded w-8 h-8 hover:bg-gray-300 hover:cursor-pointer">
            <FontAwesomeIcon icon={faGear} />
          </button>
        </div>
      } />
      <div className='m-1'>
        {urlItems}
      </div>
    </>
  );
}
'use client'

import React, { JSX, Suspense, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./globals.css"
import { faGear, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Dialog from './components/dialog';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import AppBar from './components/appbar';
import UrlItem from './components/urlItem';
import { deleteUrl, Urls, getUrls, newUrls, BaseUrl } from "./components/url_lists";

function HomeBody() {
  const [urlItems, setUrlItems] = useState<JSX.Element | null>(null);
  const [targetUrl, setTargetUrl] = useState<string>("");
  const [locationUrl, setLocationUrl] = useState<string>("");
  const route = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  useEffect(() => {
    try {
      updateItems()
    } catch (e) {
      setUrlItems(<div>{`${e}`}</div>)
    }
  }, []);

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
    setLocationUrl("")
  }

  function closeDialog() {
    updateParams('dialog', null)
    setTargetUrl("")
    setLocationUrl("")
  }

  const handleTargetChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTargetUrl(event.target.value);
  };

  const handleLocationChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLocationUrl(event.target.value);
  };

  async function updateItems() {
    const urls = await getUrls()
    setUrlItems(
      <div>
        {(urls).map((value: Urls) => (
          <UrlItem
            key={value.target}
            target={value.target}
            location={value.location}
            onDeletePressed={() => {
              deleteUrl(() => {
                route.refresh()
              }, value.target)
            }} />
        ))}
      </div>
    )
  }

  return (
    <>
      <Suspense>
        <Dialog title='Create Link' onClose={() => closeDialog()} onComfirm={() => newUrls(targetUrl, locationUrl, () => comfirmDialog())}>
          <div className='m-3 gap-3 flex flex-col items-center'>
            <div className='flex flex-row items-center w-full g-3'>
              <div className='w-24'>Target:</div>
              <div className='flex flex-row w-full items-center gap-2 ml-2 outline rounded-md pl-1 outline-black/15'>
                <div>
                  <BaseUrl />/rd/
                </div>
                <input onChange={handleTargetChange} value={targetUrl} className='w-full outline-transparent p-1 pl-2 rounded-md bg-black/10'></input>
              </div>
            </div>
            <div className='flex flex-row items-center w-full g-3'>
              <div className='w-24'>Location:</div>
              <input onChange={handleLocationChange} value={locationUrl} className='w-full outline outline-black/15 p-1 pl-2 ml-2 rounded-md bg-black/10'></input>
            </div>
          </div>
        </Dialog>
      </Suspense>
      <AppBar title='OneUrl' leading_icon='/ou.svg' actions={
        <div className='flex items-center gap-3'>
          <button onClick={() => updateParams('dialog', 'true')} className='flex items-center gap-1.5 text-black/75 dark:text-white/85 rounded-md h-8 bg-green-200 dark:bg-green-700 pr-2 pl-2 hover:bg-green-400 dark:hover:bg-green-500 hover:cursor-pointer'>
            <FontAwesomeIcon icon={faPlus} />
            Create
          </button>
          <button onClick={() => console.log('setting')} className="rounded w-8 h-8 hover:bg-gray-300 hover:cursor-pointer dark:hover:bg-slate-600">
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

export default function Home() {
  return (<Suspense>
    <HomeBody />
  </Suspense>)
}
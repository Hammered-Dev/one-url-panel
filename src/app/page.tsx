import { Suspense } from "react";
import AddUrlDialog from "./components/add_url_dialog";
import { HomeAppBar } from "./components/home_appbar";
import UrlList from "./components/url_lists";
import getConfig from "next/config";
export default async function Home() {
  const { serverRuntimeConfig } = getConfig();
  return (
    <>
      <Suspense>
        <HomeAppBar />
        <UrlList />
        <AddUrlDialog api_url={`${serverRuntimeConfig.api_url}/manage/urls`} />
      </Suspense>
    </>
  )
}
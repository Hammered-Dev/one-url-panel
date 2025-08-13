import { Suspense } from "react";
import AddUrlDialog from "./components/add_url_dialog";
import { HomeAppBar } from "./components/home_appbar";
import UrlList from "./components/url_lists";
import { env } from "next-runtime-env";
export default async function Home() {
  return (
    <>
      <Suspense>
        <HomeAppBar />
        <UrlList />
        <AddUrlDialog api_url={`${env('API_URL')}/manage/urls`} />
      </Suspense>
    </>
  )
}
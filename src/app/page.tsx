import { Suspense } from "react";
import { HomeAppBar } from "./components/home_appbar";
import UrlList from "./components/url_lists";
export default async function Home() {
  return (
    <>
      <Suspense>
        <HomeAppBar />
        <UrlList />
      </Suspense>
    </>
  )
}
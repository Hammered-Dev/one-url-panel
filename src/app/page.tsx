import { Suspense } from "react";
import { HomeAppBar } from "./components/home_appbar";
import UrlList from "./components/url_lists";
import { env } from "next-runtime-env";
export default async function Home() {
  return (
    <>
      <Suspense>
        <HomeAppBar api_url={`${env('API_URL')}`} />
        <UrlList api_url={`${env('API_URL')}`} />
      </Suspense>
    </>
  )
}
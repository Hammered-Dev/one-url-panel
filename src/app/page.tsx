import AddUrlDialog from "./components/add_url_dialog";
import { HomeAppBar } from "./components/home_appbar";
import UrlList from "./components/url_lists";
export default async function Home() {
  return (
    <>
      <HomeAppBar />
      <UrlList />
      <AddUrlDialog api_url={`${process.env.API_URL}/manage/urls`} />
    </>
  )
}
import { SettingsAppBar } from "../components/settings_app_bar"
import { SettingBody } from "./page_body"
import { env } from "next-runtime-env";

export default async function Setting() {

    return (
        <>
            <SettingsAppBar />
            <SettingBody api_url={`${env('API_URL')}`} />
        </>
    )
}
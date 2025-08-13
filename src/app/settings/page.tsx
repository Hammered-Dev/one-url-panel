import getConfig from "next/config";
import { SettingsAppBar } from "../components/settings_app_bar"
import { SettingBody } from "./page_body"

export default async function Setting() {
    const { serverRuntimeConfig } = getConfig();

    return (
        <>
            <SettingsAppBar />
            <SettingBody api_url={serverRuntimeConfig.api_url} />
        </>
    )
}
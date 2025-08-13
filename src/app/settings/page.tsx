import { SettingsAppBar } from "../components/settings_app_bar"
import { SettingBody } from "./page_body"

export default async function Setting() {
    const API_URL = process.env.API_URL

    return (
        <>
            <SettingsAppBar />
            <SettingBody api_url={API_URL ?? ""} />
        </>
    )
}
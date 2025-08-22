import { SettingsAppBar } from "../components/settings_app_bar"
import { SettingBody } from "./page_body"

export default async function Setting() {

    return (
        <>
            <SettingsAppBar />
            <SettingBody />
        </>
    )
}
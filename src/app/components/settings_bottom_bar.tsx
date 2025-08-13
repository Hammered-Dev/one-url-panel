'use client'

import { TextButton } from "./buttons"

export function SettingsBottomBar({ onSaveClick }: { onSaveClick: () => void }) {
    return (
        <div className="border-t border-t-black/15 p-2 flex justify-end absolute bottom-3.5 pr-6 w-full">
            <TextButton
                text="Save"
                className={"bg-green-200 hover:bg-green-400"}
                onClick={onSaveClick} />
        </div>
    )
}
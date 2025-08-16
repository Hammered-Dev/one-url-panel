'use client'

import { Button } from "@heroui/react"
import { TextButton } from "./buttons"

export function SettingsBottomBar({ onSaveClick }: { onSaveClick: () => void }) {
    return (
        <div className="p-2 flex justify-end absolute bottom-3.5 pr-6 w-full">
            <Button color="primary" onPress={onSaveClick}>
                Save
            </Button>
        </div>
    )
}
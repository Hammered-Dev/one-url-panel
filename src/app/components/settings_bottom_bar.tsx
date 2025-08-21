'use client'

import { Button } from "@heroui/react"

export function SettingsBottomBar({ onSaveClick }: { onSaveClick: () => void }) {
    return (
        <div className="p-2 flex justify-end absolute bottom-3.5 w-full max-w-[1024px] place-self-center">
            <Button color="primary" onPress={onSaveClick}>
                Save
            </Button>
        </div>
    )
}
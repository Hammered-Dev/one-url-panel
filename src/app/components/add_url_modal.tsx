'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react"
import axios from "axios"
import { useState } from "react"

type Props = {
    isOpen: boolean,
    onOpenChange: (arg0: boolean) => void,
    api_url: string
}

export default function AddURlModal({ isOpen, onOpenChange, api_url }: Props) {
    const [target, setTarget] = useState("");
    const [location, setLocation] = useState("");
    const errors: string[] = []
    const specialCharRegex = /[^\p{L}\p{N}\s-]/u

    if (specialCharRegex.test(target)) {
        errors.push('Target must not contain any special characters')
    }

    const onSubmit = (onClose: () => void) => {
        axios.post(`${api_url}/manage/urls`, { "target": target, "location": location })
            .then(onClose)
    }
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>Add Url</ModalHeader>
                        <ModalBody>
                            <Input
                                label="Target"
                                isRequired
                                onChange={(e) => setTarget(e.target.value)}
                                value={target}
                                errorMessage={() => (
                                    <ul>
                                        {errors.map((error, i) => (
                                            <li key={i}>{error}</li>
                                        ))}
                                    </ul>
                                )}
                                isInvalid={errors.length > 0}>
                            </Input>
                            <Input label="Location" value={location} isRequired type="url" onChange={(e) => setLocation(e.target.value)}></Input>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onPress={() => onSubmit(onClose)}>
                                Confirm
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
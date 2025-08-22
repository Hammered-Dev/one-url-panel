'use client'

import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@heroui/react"
import axios from "axios"
import { useContext, useState } from "react"
import { ApiContext } from "../providers"

type Props = {
    isOpen: boolean,
    onOpenChange: (arg0: boolean) => void,
}

export default function AddURlModal({ isOpen, onOpenChange }: Props) {
    const [target, setTarget] = useState("");
    const [location, setLocation] = useState("");
    const errors: string[] = []
    const specialCharRegex = /[^\p{L}\p{N}\s-]/u
    const data = useContext(ApiContext)

    if (specialCharRegex.test(target)) {
        errors.push('Target must not contain any special characters')
    }

    const onSubmit = (onClose: () => void) => {
        axios.post(`${data.API_URL}/manage/urls`, { "target": target, "location": location })
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
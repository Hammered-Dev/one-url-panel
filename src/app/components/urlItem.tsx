'use client'

import { Button, Card, CardFooter, CardHeader, Divider } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

type Props = {
    target: string | undefined;
    location: string | undefined;
    api_url: string;
    onDelete: () => void
}

export default function UrlItem({ target, location, api_url, onDelete }: Props) {
    const delete_target = () => {
        axios.delete(`${api_url}/manage/urls/${target}`).then(onDelete)
    }
    return (
        <Card className="max-w-2xs" fullWidth>
            <CardHeader className="flex flex-col">
                <p className="text-medium">{target}</p>
                <p className="text-small">{location}</p>
            </CardHeader>
            <Divider />
            <CardFooter className="flex flex-row gap-2">
                <Button isIconOnly onPress={() => window.open(`rd/${target}`, '_blank', 'noopener,noreferrer')}>
                    <FontAwesomeIcon icon={faLink} />
                </Button>
                <Button isIconOnly color="danger" onPress={delete_target}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </CardFooter>
        </Card>
    )
}
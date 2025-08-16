'use client'

import { Button, Card, CardFooter, CardHeader, Divider } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
    target: string | undefined;
    location: string | undefined;
}

export default function UrlItem({ target, location }: Props) {
    return (
        <Card className="max-w-2xs">
            <CardHeader className="flex flex-col">
                <p className="text-medium">{target}</p>
                <p className="text-small">{location}</p>
            </CardHeader>
            <Divider />
            <CardFooter className="flex flex-row gap-2">
                <Button isIconOnly onPress={() => window.open(`rd/${target}`, '_blank', 'noopener,noreferrer')}>
                    <FontAwesomeIcon icon={faLink} />
                </Button>
                <Button isIconOnly color="danger">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </CardFooter>
        </Card>
    )
}
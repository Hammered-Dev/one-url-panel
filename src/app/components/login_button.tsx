'use client'
import { Button } from '@heroui/react'
import * as client from 'openid-client'
import { useContext, useEffect, useState } from 'react'
import { ApiContext } from '../providers'
import { redirect } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function LoginButton() {
    const [redirect_uri, setCurrentUrl] = useState("")
    const data = useContext(ApiContext)
    const onClick = async () => {
        const server = URL.parse(data.AUTH_SERVER)
        if (!server) {
            return
        }
        console.log(data.CLIENT_ID)
        const config: client.Configuration = await client.discovery(server, data.CLIENT_ID, data.CLIENT_SECRET)
        const scope = "openid profile offline_access"

        const parameters: Record<string, string> = {
            redirect_uri,
            scope,
        }

        const state = client.randomState()
        parameters.state = state

        const redirect_to = client.buildAuthorizationUrl(config, parameters)
        redirect(redirect_to.toString())
    }

    useEffect(() => {
        setCurrentUrl(window.location.origin)
    }, [])

    return (
        <Button onPress={onClick} color='primary' isIconOnly>
            <FontAwesomeIcon icon={faUser} />
        </Button>
    )
}
'use client'

import { HeroUIProvider } from '@heroui/react'
import { env } from 'next-runtime-env';
import { Context, createContext } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ApiProvider>
                {children}
            </ApiProvider>
        </HeroUIProvider>
    )
}

export const ApiContext: Context<BaseConfig> = createContext(
    { API_URL: "", AUTH_SERVER: "", CLIENT_ID: "", CLIENT_SECRET: "" }
);

type BaseConfig = {
    API_URL: string;
    AUTH_SERVER: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
}

export function ApiProvider({ children }: { children: React.ReactNode }) {
    const api_url = env("API_URL");
    const auth_server = env("AUTH_SERVER");
    const client_id = env("CLIENT_ID");
    const client_sceret = env("CLIENT_SECRET");

    const mapping: BaseConfig = {
        API_URL: api_url || "",
        AUTH_SERVER: auth_server || "",
        CLIENT_ID: client_id || "",
        CLIENT_SECRET: client_sceret || ""
    }

    return (
        <ApiContext.Provider value={mapping}>
            {children}
        </ApiContext.Provider>
    )
}

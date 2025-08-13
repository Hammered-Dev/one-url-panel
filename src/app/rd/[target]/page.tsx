import RedirctDisplay from "@/app/components/redrict_display";
import { env } from "next-runtime-env";
import Image from "next/image";

export default async function Redirct({ params }: { params: Promise<{ target: string }> }) {
    const { target } = await params

    return (
        <div className="flex flex-col items-center justify-center content-center place-self-center">
            <Image src={'/ou.svg'} alt="OU icon" width={128} height={128} />
            <RedirctDisplay link={env('API_URL') ?? ""} target={target} />
        </div>
    )
}
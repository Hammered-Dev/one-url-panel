import RedirctDisplay from "@/app/components/redrict_display";
import axios from "axios";
import Image from "next/image";

export default async function Redirct({ params }: { params: Promise<{ target: string }> }) {
    const { target } = await params
    const url = await axios.get(`${process.env.API_URL}/rd/${target}`)

    return (
        <div className="flex flex-col items-center justify-center content-center place-self-center">
            <Image src={'/ou.svg'} alt="OU icon" width={128} height={128} />
            <RedirctDisplay link={url.data.location} delay={3000} />
        </div>
    )
}
import RedirctDisplay from "@/app/components/redrict_display";
import axios from "axios";

export default async function Redirct({ params }: { params: Promise<{ target: string }> }) {
    const { target } = await params
    const url = await axios.get(`${process.env.API_URL}/rd/${target}`)

    return (
        <RedirctDisplay link={url.data.location} delay={3000} />
    )
}
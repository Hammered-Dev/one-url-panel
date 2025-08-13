import axios from "axios";
import { IconButton } from "./buttons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteUrlButton({ target, onDelete }: { target: string, onDelete: () => void }) {
    const onPressed = async () => {
        try {
            await axios.delete(`${process.env.API_URL}/manage/urls/${target}`);
        } catch (error) {
            if (error instanceof AggregateError) {
                console.error("Caught an AggregateError:", error.message);
                error.errors.forEach((subErr, index) => {
                    console.error(`Sub-error ${index + 1}:`, subErr.message);
                });
            } else {
                console.log(error)
            }
        } finally {
            onDelete()
        }
    }

    return (
        <IconButton
            icon={<FontAwesomeIcon icon={faTrash} />}
            className={"hover:bg-red-300"}
            onClick={() => onPressed()} />
    )
}
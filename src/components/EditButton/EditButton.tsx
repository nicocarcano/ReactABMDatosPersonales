import {PencilFill} from "react-bootstrap-icons";

interface EditButtonProps{
    onClick: () => void;
}

export const EditButton = ({onClick}:EditButtonProps) => {

    return(
        <PencilFill
            color="#black"
            size={28}
            onClick={onClick}
            onMouseEnter={() => { document.body.style.cursor = 'pointer' }}
            onMouseLeave={() => { document.body.style.cursor = 'default' }}
        />
    )
}
export default EditButton;
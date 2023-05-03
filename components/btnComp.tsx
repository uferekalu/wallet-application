import { Button } from "react-bootstrap";

export default function BtnComp({ children, style, onClick, ...others }) {
    return (
        <Button style={style} onClick={onClick}>
            {children}
        </Button>
    )
}
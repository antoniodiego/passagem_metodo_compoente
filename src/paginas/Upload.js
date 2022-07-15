import { React } from "react";
import DragAndDrop from "../componentes/DragAndDropUpload";
import Button from "@mui/material/Button";

function Upload() {
    return <>
        <DragAndDrop onSelect={(escolhido) => {
            console.log("onSelect em Upload ", escolhido)
        }}>

        </DragAndDrop>

        <Button onClick={() => {
            console.log("Enviando");
        }} variant="contained">Enviar</Button>
    </>
}

export default Upload;
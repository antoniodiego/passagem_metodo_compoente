import { React, useState } from "react";
import IconButton from "@mui/material/IconButton";
import UploadIcon from '@mui/icons-material/Upload';
import "./DragAndDropUpload.css";

function DragAndDrop(props) {
    const callbackOnSelect = props.onSelect;

    const [nomeArquivo, setNomeArquivo] = useState();

    return <>
        <div className="container">

            <IconButton onClick={() => {
                console.log("clique no componente");
                setNomeArquivo("Teste");
                callbackOnSelect("teste");
            }
            }>
                <UploadIcon />
            </IconButton >

            <p>{nomeArquivo}</p>
        </div>
    </>
}


export default DragAndDrop;
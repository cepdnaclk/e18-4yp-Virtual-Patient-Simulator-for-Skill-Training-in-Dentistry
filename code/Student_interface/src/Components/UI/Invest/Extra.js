import "./Case.css";
import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import ToothGIF from "./ToothGIF";

function Extra() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%",}}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center",}}>
                <div style={{height: "100%"}}>
                    <Stack spacing={2}>
                        <Alert severity="success">The patient looks fit & healthy!</Alert>
                    </Stack>
                </div>
                <div style={{marginTop: "20px"}}>
                    <ToothGIF/>
                </div>
            </div>
        </div>
    );
}

export default Extra;

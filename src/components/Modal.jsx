import React from 'react'
import * as ReactDOM from 'react-dom'
import { Box } from '@mui/system'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <>
            <Box sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                display: "flex",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {props.children}
            </Box>
        </>
        , document.getElementById("modal"))
}

export default Modal
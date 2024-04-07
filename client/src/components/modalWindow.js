import { React, useState } from "react";
import Modal from '@mui/material/Modal';
import AuthField from "./modalWindowcomponent/authField";
import { Box } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const ModalWindow = () => {

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <AuthField />
            </Box>
        </Modal>
    )
}
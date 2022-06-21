import React, { useState } from 'react'
import './styles/ItemUser.css';
import { Card, CardContent, CardMedia, Typography, Box, Button, Modal, Paper } from '@mui/material';
import { Link } from "react-router-dom"
import axios from 'axios';

const ItemUser = (props) => {
    const { name, country, email, id } = props.user
    const [open, setOpen] = useState(false)


    const handleModal = () => {
        setOpen(true)
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
        setOpen(false);
    }

    return (
        <div>
            <Card sx={{
                maxWidth: "600px",
                maxHeight: "200px",
                margin: "8px auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "visible"
            }}>
                <CardMedia
                    sx={{
                        flex: 1,
                        maxHeight: '200px'
                    }}
                    component="img"
                    image="/logo512.png"
                />
                <CardContent sx={{
                    flex: 2
                }}>
                    <Typography variant="body1">
                        <strong>Nombre:</strong> {name}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Pais:</strong> {country}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Correo:</strong> {email}
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        {
                            props.isEdit &&
                            <Button variant="contained" to={`/edit/${id}`} color="secondary" component={Link}>
                                Editar
                            </Button>
                        }
                        {
                            props.isDelete &&
                            <Button variant="contained" color="secondary" onClick={handleModal}>
                                Delete
                            </Button>
                        }
                    </Box>
                </CardContent>
                <Modal open={open} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Paper sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        height: "20%",
                        width: "30%",
                    }}>
                        <Typography>Esta seguro de eliminar este usuario?</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            width: "70%"
                        }}>
                            <Button variant="contained" color="primary" onClick={handleDelete}>Aceptar</Button>
                            <Button variant="contained" color="primary" onClick={() => setOpen(false)}>Cerrar</Button>
                        </Box>

                    </Paper>
                </Modal>
            </Card>
        </div >
    )
}

export default ItemUser
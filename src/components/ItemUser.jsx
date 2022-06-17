import React from 'react'
import './styles/ItemUser.css';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { Link } from "react-router-dom"
import axios from 'axios';

const ItemUser = (props) => {
    const { name, country, email, phone, id } = props.user

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3000/users/${id}`)
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Card sx={{
                maxWidth: "200px",
                maxHeight: "200px",
                margin: "8px auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                overflow: "visible"
            }}>
                <CardMedia
                    sx={{
                        flex: 1
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
                            <Button variant="contained" color="secondary" onClick={handleDelete}>
                                Delete
                            </Button>
                        }
                    </Box>
                </CardContent>
            </Card>
        </div >
    )
}

export default ItemUser
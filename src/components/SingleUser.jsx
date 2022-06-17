import React from 'react'
import './styles/ItemUser.css';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
/* import { Link } from "react-router-dom"
import axios from 'axios'; */

const SingleUser = ({
    name,
    picture,
    location,
    email,
    phone
}) => {

    return (
        <div>
            <Card sx={{
                maxWidth: "600px",
                maxHeight: "200px",
                margin: "10px auto",
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
                    image={picture.large}
                />
                <CardContent sx={{
                    flex: 2
                }}>
                    <Typography variant="body1">
                        <strong>Nombre:</strong> {`${name.title} ${name.first} ${name.last}`}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Pais:</strong> {location.country}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Correo:</strong> {email}
                    </Typography>
                    <Typography variant="body1">
                        <strong>Telefono:</strong> {phone}
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}

export default SingleUser
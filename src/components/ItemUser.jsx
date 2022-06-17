import React from 'react'
import './styles/ItemUser.css';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';


const ItemUser = (props) => {
    const { name, country, email } = props.user
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
                    {
                        props.isEdit &&
                        <Box>
                            <Button variant="contained" color="secondary">
                                Editar
                            </Button>
                        </Box>
                    }
                </CardContent>
            </Card>
        </div >
    )
}

export default ItemUser
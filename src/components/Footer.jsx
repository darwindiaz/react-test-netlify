import React from 'react'
import { Container, Typography, Grid, Link } from '@mui/material'

const Footer = () => {
    return (
        <footer>
            <Container sx={{
                position: "fixed",
                minWidth: "100%",
                padding: "24px 0px",
                color: "white",
                bottom: "0px",
                backgroundColor: "#1976d2",
            }}>
                <Grid container justifyContent="center"
                    alignItems="center">
                    <Grid item xs={12} sm={4} sx={{ display: "grid" }}>
                        <Typography variant="h5">
                            <strong>Politicas</strong>
                        </Typography>
                        <Link href="#" color='inherit'>Politicas de Privacidad</Link>
                        <Link href="#" color='inherit'>Terminos y Condiciones</Link>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: "grid" }}>
                        <Typography variant="h5">
                            <strong>Servicios</strong>
                        </Typography>
                        <Link href="#" color='inherit'>Soporte</Link>
                        <Link href="#" color='inherit'>FAQ</Link>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: "grid" }}>
                        <Typography variant="h5">
                            <strong>Contactanos</strong>
                        </Typography>
                        <Link href="#" color='inherit'>3216549870</Link>
                        <Link href="#" color='inherit'>dd@gmail.com</Link>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
}

export default Footer
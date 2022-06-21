import React from 'react'
import { AppBar, Toolbar, IconButton, Container, Link } from '@mui/material'
import { Link as RouterLink } from "react-router-dom"

const Header = () => {
    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar edge="start" sx={{
                    display: "flex",
                    justifyContent: "space-evenly"
                }}>
                    <IconButton>
                        <input type="image" img src={'/logo512.png'} alt="photo" height="50px" />
                    </IconButton>
                    <Link component={RouterLink} to="/" color="inherit">
                        Inicio
                    </Link>
                    <Link component={RouterLink} to="/form" color="inherit">
                        Formulario
                    </Link>
                    <Link component={RouterLink} to="/list" color="inherit">
                        Listado
                    </Link>
                    {/* <Link component={RouterLink} to="/user/:id" color="inherit">
                        User
                    </Link> */}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
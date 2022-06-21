import React from 'react'
/* import ItemUser from '../components/ItemUser' */
import { Box } from '@mui/material'
import UserList from '../components/containers/UserList'

/* const data = {
    name: "Darwin Diaz",
    country: "Colombia",
    email: "darwindiaz@example.com",
    phone: "654987321"
} */

const Home = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            minHeight: "100%",
            margin: "24px 8px",

        }}>

            <h1 className="text-center">Lista de Usuarios</h1>
            <UserList></UserList>
        </Box>
    )
}

export default Home
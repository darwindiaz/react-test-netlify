import React from 'react'
import ItemUser from '../components/ItemUser'
import { Box, Typography } from '@mui/material'

const data = {
    name: "Darwin Diaz",
    country: "Colombia",
    email: "darwindiaz@example.com",
    phone: "654987321"
}

const Home = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70vh",
            margin: "24px 8px"
        }}>

            <h1 className="text-center">Lista de Usuarios</h1>
            <ItemUser user={data}></ItemUser>
            <Typography variant="body2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime cupiditate voluptates natus reprehenderit impedit odio totam minima. Architecto officiis, minus molestiae sequi cupiditate optio possimus odit nesciunt, pariatur commodi mollitia?</Typography>
        </Box>
    )
}

export default Home
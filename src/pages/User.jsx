import React from 'react'
import ItemUser from '../components/ItemUser'
import { useParams } from "react-router-dom";
import usersList from '../data';
import { Box } from '@mui/material';

const User = () => {

    const { id } = useParams();
    const singleUser = usersList.find(user => user.id === id)
    return (
        <div>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: "70vh",
                margin: "24px 8px"
            }}>
                <ItemUser user={singleUser} ></ItemUser>
            </Box>

        </div>
    )
}

export default User
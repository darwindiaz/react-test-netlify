import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser'
import { Box, CircularProgress, Typography } from '@mui/material'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    "https://randomuser.me/api/?results=5"
                );
                const { results } = response.data;
                setUsers(results);

            } catch (error) {
                setLoading(true);
                setError(error.message);
            }
            setLoading(false);
        }

        getData();

    }, [])

    return (
        <>
            {
                !loading ?
                    (
                        <Box sx={{
                            height: "100vh"
                        }}>{
                                users.map((item, index) => {
                                    return <SingleUser key={index} {...item}></SingleUser>
                                })
                            }</Box >
                    )
                    :
                    (
                        <Box sx={{
                            height: "100vh"
                        }}>
                            <CircularProgress color="secondary"></CircularProgress>
                        </Box>
                    )
            }
            {error && <Typography>{error}</Typography>}
        </>

    )
}

export default UserList
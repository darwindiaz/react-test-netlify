import React from 'react'
import SingleUser from '../SingleUser'
import { Box, CircularProgress, Typography, Button, TextField } from '@mui/material'
import Modal from '../Modal'

const UserListView = ({ users, loading, error, onLoad, onFilter }) => {

    return (
        <>
            <TextField onChange={onFilter}></TextField>
            {
                !loading ?
                    (
                        <>
                            <Box>
                                <Box sx={{
                                    height: "100vh"
                                }}>{
                                        users.map((item, index) => {
                                            return <SingleUser key={index} {...item}></SingleUser>
                                        })
                                    }</Box >
                            </Box>
                            <Box sx={{
                                paddingBottom: "150px"

                            }}>
                                <Button variant="contained" color="secondary" onClick={onLoad}>
                                    Cargar más
                                </Button>
                            </Box>
                        </>
                    )
                    :
                    (
                        <Box sx={{
                            height: "100vh"
                        }}>

                        </Box>
                    )
            }
            {
                loading && <Modal>
                    <CircularProgress color="secondary"></CircularProgress>
                </Modal>
            }
            {error && <Typography>{error}</Typography>}
        </>

    )
}

export default UserListView
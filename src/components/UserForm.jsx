import React from 'react'

import { FormControl, TextField, Box, Button } from '@mui/material/'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

import "./styles/UserForm.css"

const UserForm = (props) => {
    const { name, country, email, id } = props.user;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/users", props.user);
            navigate("/list");
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async () => {
        try {
            await axios.put(`http://localhost:3000/users/${id}`, props.user);
            navigate("/list");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Ingrese su nombre completo"
                        id="demo-helper-text-misaligned"
                        label="Nombre"
                        name="name" onChange={props.onChangeForm} value={name}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Ingrese su pais"
                        id="demo-helper-text-misaligned"
                        label="Pais"
                        name="country" onChange={props.onChangeForm} value={country}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <TextField
                        helperText="Ingrese su pais"
                        id="demo-helper-text-misaligned"
                        label="Correo Electronico"
                        name="email" onChange={props.onChangeForm} value={email}
                    />
                </FormControl>
                <Box>
                    {
                        props.isEdit ?
                            <Button type="button" color="primary" variant="contained" onClick={handleEdit}>Editar</Button>
                            :
                            <Button type="submit" color="primary" variant="contained">Crear</Button>
                    }

                </Box>
            </form>

        </div >
    )

}

export default UserForm
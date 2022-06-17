import React, { useEffect, useState } from 'react'
import ItemUser from '../components/ItemUser';
import UserForm from '../components/UserForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const Edit = () => {

    const [user, setUser] = useState({
        name: "",
        country: "",
        email: "",
        phone: ""
    })

    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    }

    const { id } = useParams();

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users/" + id)
            const { data } = response;
            setUser(data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])


    return (
        <div>
            <h2 className="title-form"> Editar Usuarios</h2>
            <ItemUser user={user}></ItemUser>
            <UserForm onChangeForm={handleChange} user={user} isEdit />
        </div>
    )
}

export default Edit
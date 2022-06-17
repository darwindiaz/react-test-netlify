import React, { Component, useEffect, useState } from 'react'
import ItemUser from '../components/ItemUser'
import axios from 'axios';
//import usersList from '../data'

const List = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users")
            const { data } = response;
            setUsers(data);
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
            <h2 className="title-form"> Lista de Usuarios</h2>
            {
                users.map((item, index) => {
                    return <ItemUser key={index} user={item} isEdit isDelete />
                })
            }
        </div>
    )
}

export default List
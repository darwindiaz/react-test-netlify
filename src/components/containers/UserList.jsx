import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserListView from '../views/UserListView'


const UserList = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [page, setPage] = useState(0)
    const [filterUser, setFilterUser] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://randomuser.me/api/?page=${page}&results=10`
                );
                const { results } = response.data;
                setUsers(results);
                setFilterUser(results);

            } catch (error) {
                setLoading(true);
                setError(error.message);
            }
            setLoading(false);
        }

        getData();

    }, [page])

    const handleLoad = () => {
        setPage(page + 1)
    }

    const handleFilter = (e) => {
        const filtered = users.filter((user) => {
            return (user.name.first.toLowerCase().includes(e.target.value) || user.name.last.toLowerCase().includes(e.target.value))
        })
        setFilterUser(filtered);
    }


    return (
        <>
            <UserListView users={filterUser} loading={loading} error={error} onLoad={handleLoad} onFilter={handleFilter}></UserListView>
        </>

    )
}

export default UserList
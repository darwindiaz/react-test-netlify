import logo from '../logo.svg';
import React, { Component, useState, useEffect } from 'react'
import './styles/Ejercicio.css';

const dataUser = {
    name: 'Jenny Jenkis',
    email: 'jeny.jenkis@example.com',
    birthday: '08/09/1945',
    address: 'casita 1',
    phone: '30065987',
    password: 'jennyjenkis'
}

const Ejercicio = () => {
    const [dataUser, setDataUser] = useState([]);
    const [user, setUser] = useState({
        title: 'name',
        description: 'Jenny Jenkis'
    });

    useEffect(() => {
        dataApi();
    }, [])

    const dataApi = async () => {
        const data = await fetch('https://randomuser.me/api/');
        const users = await data.json();
        setDataUser(users);
    }

    /* constructor(props) {
        super(props);

        this.state = {
            title: 'name',
            description: 'Jenny Jenkis'
        }
    } */

    const handleChange = (e) => {
        console.log(e.target.name, dataUser)
        if (e.target.name === "name") {
            const data = dataUser.results[0][e.target.name];
            setUser({
                title: e.target.name,
                description: data["title"] + ' ' + data["first"] + ' ' + data["last"]
            })
        } else if (e.target.name === "location") {
            const data = dataUser.results[0][e.target.name];
            setUser({
                title: e.target.name,
                description: data["street"]["name"] + ' ' + data["street"]["number"]
            })
        } else if (e.target.name === "password") {
            const data = dataUser.results[0]["login"];
            setUser({
                title: e.target.name,
                description: data["password"]
            })
        } else if (e.target.name === 'birthday') {
            const data = dataUser.results[0]["dob"];
            setUser({
                title: e.target.name,
                description: data["date"]
            })
        } else {
            setUser({
                title: e.target.name,
                description: dataUser.results[0][e.target.name]
            })
        }

    }


    return (
        <div className='body'>
            <div className='container'>
                <div className='row'>
                    <div className="card">
                        <img src={logo} className="card-img-top" alt="logo" />
                        <div className='card-body'>
                            <p className="card-text">My {user.title}</p>
                            <h5 className="card-title">{user.description}</h5>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="name" type="button" className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="email" type="button" className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="birthday" type="button" className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="location" type="button" className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-map" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="phone" type="button" className="nav-link">
                                        <svg name="phone" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button onClick={handleChange} name="password" type="button" className="nav-link">
                                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="25" height="25" fill="currentColor" className="bi bi-lock" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Ejercicio
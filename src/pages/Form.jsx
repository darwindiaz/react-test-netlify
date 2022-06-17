import React, { Component } from 'react'
import ItemUser from '../components/ItemUser';
import UserForm from '../components/UserForm';

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: {
                name: "",
                country: "",
                email: "",
                phone: ""
            }
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <div>
                <h2 className="title-form"> Nuevo Usuarios</h2>
                <ItemUser user={this.state} />
                <UserForm onChangeForm={this.handleChange} user={this.state} />
            </div>
        )
    }
}

export default Form
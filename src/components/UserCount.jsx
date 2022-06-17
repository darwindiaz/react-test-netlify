import React, { Component } from 'react'
import './styles/UserCount.css'

export class UserCount extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            text: 'usuarios'
        }
    }

    handleAdd = () => { this.setState({ count: this.state.count + 1 }) };
    handleSubstract = () => { this.setState({ count: this.state.count - 1 }) };

    render() {
        return (
            <div className='count'>
                <h2>Contador de Usuarios</h2>
                <h3>{this.state.count} - {this.state.text}</h3>
                <button onClick={this.handleAdd}>Aumentar</button>
                <button onClick={this.handleSubstract}>Disminuir</button>
            </div>
        )
    }
}

export default UserCount
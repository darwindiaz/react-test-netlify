import './App.css';
/* import Ejercicio from './components/Ejercicio'; 
import Ejercicio2 from './components/Ejercicio2'; */
import React, { Component } from 'react'
import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';
import Layout from './layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import Edit from './pages/Edit';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/form" element={<Form />}></Route>
            <Route exact path="/list" element={<List />}></Route>
            <Route exact path="/user/:id" element={<User />}></Route>
            <Route exact path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default App;
/* <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/form" element={<Form />}></Route>
            <Route exact path="/list" element={<List />}></Route>
            <Route exact path="/user/:id" element={<User />}></Route>
          </Routes>
        </Layout>
      </BrowserRouter> */
/* <Header></Header>
        <h1 className="text-center">Lista de Usuarios</h1>
        {
          this.state.users.map((user, index) => {
            return (
              <ItemUser key={index} user={user} />
            )
          })
        }
        <UserForm onChangeForm={this.handleChange} user={this.state.users[0]} />
        <Footer></Footer> */
/*  <UserCount /> */

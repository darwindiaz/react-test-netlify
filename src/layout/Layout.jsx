import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '@mui/material';

const Layout = (props) => {
    return (
        <div>
            <Header></Header>
            <Container maxWidth="lg">
                {props.children}
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Layout
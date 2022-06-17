import React, { Component } from 'react'
import { Box, Typography, Button } from '@mui/material';


export default class Ejercicio2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd = () => { this.setState({ count: this.state.count + 1 }) };
    handleReset = () => { this.setState({ count: 0 }) };
    handleSubstract = () => { this.setState({ count: this.state.count - 1 }) };

    render() {
        return (
            <>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h1">
                        BIENVENIDO A USER RANDOM
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h3">
                        Contado de usuarios
                    </Typography>
                    <Typography variant="h5">
                        {this.state.count}
                    </Typography>
                </Box>
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Button variant="contained" onClick={this.handleAdd}>Aumentar</Button>
                    <Button variant="contained" onClick={this.handleReset}>Reiniciar</Button>
                    <Button variant="contained" onClick={this.handleSubstract}>Disminuir</Button>
                </Box>
            </>
        )
    }
}

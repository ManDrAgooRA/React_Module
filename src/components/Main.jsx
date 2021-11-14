import React from 'react'
import { Container } from '@mui/material';
import Routes from '../routes/Routes';
import Header from '../components/Header/Header'

export default function Main() {
    return (
        <>
            <Header />
            <Container>
                <Routes />
            </Container>
        </>
    )
}

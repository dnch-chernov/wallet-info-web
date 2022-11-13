import React, { useState } from "react";
import { Button, Form, Grid, Header } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';


export function StartPage() {
    const tokens = [
        { text: 'ETH', value: 'eth' },
        { text: 'USDC', value: 'usdc' },
    ]
    const navigate = useNavigate();
    const [token, setToken] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        navigate(`${token}/${address}`);
    };
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' textAlign='center' data-testid='header-wallet-info'>
                    Wallet info
                </Header>
                <Form size='large' onSubmit={handleSubmit}>
                    <Form.Select
                        fluid
                        options={tokens}
                        placeholder='Token'
                        data-testid='dropdown-token'
                        onChange={(e, { value }) => { setToken(value) }}
                    />
                    <Form.Input
                        fluid
                        placeholder='Address'
                        data-testid='input-address'
                        onChange={(e, { value }) => { setAddress(value) }} />
                    <Button
                        color='teal'
                        fluid size='large'
                        disabled={(!token) || (!address)}
                        data-testid='button-find'>
                        Find
                    </Button>
                </Form>
            </Grid.Column>
        </Grid>
    )
}

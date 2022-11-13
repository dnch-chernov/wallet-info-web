import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Container, Divider, Grid, Header, Message } from 'semantic-ui-react';

const Web3 = require("web3");
const w3 = new Web3("https://goerli.infura.io/v3/606f8736b7d14795a3cba86cd814d4fa");
const usdcContractAddress = '0x07865c6e87b9f70255377e024ace6630c1eaa37f';
const minABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "type": "function"
    },
    // decimals
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [{ "name": "", "type": "uint8" }],
        "type": "function"
    }
];
const contractUSDC = new w3.eth.Contract(minABI, usdcContractAddress);

export function ResultsPage() {
    const { token, address } = useParams();
    const [balance, setBalance] = useState("");
    useEffect(() => {
        switch (token.toLocaleLowerCase()) {
            case 'eth':
                w3.eth.getBalance(address, (err, wei) => {
                    setBalance(`${w3.utils.fromWei(wei, 'ether')} ${token.toLocaleUpperCase()}`);
                });
                break;
            case 'usdc':
                contractUSDC.methods.balanceOf(address).call().then((wei) => {
                    setBalance(`${w3.utils.fromWei(wei, 'mwei')} ${token.toLocaleUpperCase()}`);
                });


        }
    }, []);
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='teal' data-testid='header-title'>Balance</Header>
                <Header as='h2' color='grey' data-testid='header-value'>{balance}</Header>
            </Grid.Column>
        </Grid>
    );
}

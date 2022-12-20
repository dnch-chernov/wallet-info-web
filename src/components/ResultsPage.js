import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Grid, Header } from 'semantic-ui-react';

export function ResultsPage() {
  const { token, address } = useParams();
  const [balance, setBalance] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`/api/balance/${token}/${address}`)
      .then(res => res.json())
      .then(
        (result) => {
          setBalance(`${result.balance} ${token.toLocaleUpperCase()}`);
        },
        (error) => {
          setError(error);
        }
      )
  }, [token, address]);
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      {error ? <div>{error}</div> :
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' data-testid='header-title'>Balance</Header>
          <Header as='h2' color='grey' data-testid='header-value'>{balance}</Header>
        </Grid.Column>
      }
    </Grid>
  );
}

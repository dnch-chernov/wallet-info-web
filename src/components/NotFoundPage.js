import React, { useState, useEffect } from 'react';
import { Container, Divider, Grid, Header, Message } from 'semantic-ui-react';

export function NotFoundPage() {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='grey' data-testid='header'>You are not suppose to be here!</Header>
                <p>
                    <a href='/'>Please go back</a>
                </p>
            </Grid.Column>
        </Grid>
    );
}

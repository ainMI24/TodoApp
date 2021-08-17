import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='yellow' textAlign='center'>
        Login
      </Header>
      <Form size='large'>
        <Segment>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />
          <Button color='yellow' fluid size='large'>
            <a href='/'>Login</a>
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='/register'> Register</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginForm;
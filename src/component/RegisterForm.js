import React from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

const RegisterForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='yellow' textAlign='center'>
        Register
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
            <a href='/login'> Register</a>
          </Button>
        </Segment>
      </Form>
      <Message>
        Login? <a href='/login'> Login</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default RegisterForm;
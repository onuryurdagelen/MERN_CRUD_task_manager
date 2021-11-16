import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Form,
  Input,
  Grid,
  Segment,
  Header,
  Icon,
  Message,
  GridColumn,
} from 'semantic-ui-react';
import styles from '../style/style.module.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  return (
    <Grid textAlign='center' verticalAlign='middle' className={styles.grid}>
      <GridColumn className={styles['grid-column']}>
        <Header as='h2' color='violet' icon>
          <Icon name='sign in' />
          Sign In
        </Header>
        <Form>
          <Segment>
            <Form.Field>
              <Form.Input
                fluid
                placeholder='email'
                onChange={e => setEmail(e.target.value)}
                icon='mail'
                iconPosition='left'
                name='username'
                type='email'
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid
                placeholder='password'
                onChange={e => setPassword(e.target.value)}
                icon='lock'
                iconPosition='left'
                name='username'
                type='password'
              />
            </Form.Field>
          </Segment>

          <Button color='green' fluid size='large' type='submit'>
            Login
          </Button>
        </Form>
        <Message error></Message>
        <Message>
          <Icon name='help' />
          Don't you have any account? <Link to='/register'>Register here</Link>
        </Message>
      </GridColumn>
    </Grid>
  );
};

export default Login;

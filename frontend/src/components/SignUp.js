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
const SignUp = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <Grid textAlign='center' verticalAlign='middle' className={styles.grid}>
      <GridColumn className={styles['grid-column']}>
        <Header as='h2' color='violet' icon>
          <Icon name='registered' />
          Register
        </Header>
        <Form>
          <Segment>
            <Form.Field>
              <Form.Input
                fluid
                placeholder='username'
                onChange={e => setUserName(e.target.value)}
                icon='users'
                iconPosition='left'
                name='username'
                type='text'
              />
            </Form.Field>
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
            <Form.Field>
              <Form.Input
                fluid
                placeholder='password confirmation'
                onChange={e => setPasswordConfirm(e.target.value)}
                icon='repeat'
                iconPosition='left'
                name='username'
                type='password'
              />
            </Form.Field>
          </Segment>
          <Segment>
            <Form.Group inline>
              <label>Gender</label>
              <Form.Radio
                label='male'
                name='radioGroup'
                value='male'
                checked={gender === 'male'}
                onChange={(e, { value }) => setGender(value)}
              />
              <Form.Radio
                label='female'
                name='radioGroup'
                value='female'
                checked={gender === 'female'}
                onChange={(e, { value }) => setGender(value)}
              />
            </Form.Group>
          </Segment>
          <Button color='green' fluid size='large' type='submit'>
            Register
          </Button>
        </Form>
        <Message error></Message>
        <Message>
          <Icon name='help' />
          Already have an account? <Link to='/login'>Login here</Link>
        </Message>
      </GridColumn>
    </Grid>
  );
};

export default SignUp;

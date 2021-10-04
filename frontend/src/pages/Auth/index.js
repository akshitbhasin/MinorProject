import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../services/api';
import { useAuth } from '../../contexts/user';

import logo from '../../assets/logo.svg';
import { Container, Content, Button, Error } from './styles';

export default function Auth() {
  const { auth } = useAuth();
  const history = useHistory();
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmitForm() {
    if (!input) {
      setError('Username is required.');
      return;
    }
    setError(null);
    try {
      const response = await axios.post('/users', {
        username: input,
      });
      auth(response.data);
      history.push('/main');
    } catch (error) {
      console.log(error);
      const statusMessageError = {
        404: 'This user does not exist',
        500: 'Sorry, an internal error has occurred.',
      };

      setError(statusMessageError[error.response.status]);
    }
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <Container >
      
      <Content>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="your github username"
          name="username"
          onChange={handleInputChange}
          value={input}
        />
        <Button onClick={handleSubmitForm}>Enter</Button>
      </Content>
      <Error>{error}</Error>
    </Container>
  );
}

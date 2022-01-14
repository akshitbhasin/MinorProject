import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/user';


const FormSuccess = (user) => {
    const { auth } = useAuth();
  const history = useHistory();
  auth(user.data)
    return (
        <></>
    )
}

export default FormSuccess

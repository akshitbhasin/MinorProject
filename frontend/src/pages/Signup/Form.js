import React, {useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import logo from '../../assets/logoSEEKR.svg';
import spaceship from './spaceship.svg';
import axios from '../../services/api';
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values){
        try {
            const response = await axios.post('/signup', {
              name: values.name,
              username: values.username,
              password: values.password,
              email: values.email
            });
        }
        catch(error){
            console.log(error);
        }
        setIsSubmitted(true);
    }
   
    return (
        
        <>
        <div className="bg" ></div>
        <div className='form-container'>
          <div className='form-content-left'>
            <img className='form-img' src={logo} alt='Oops!' />
            <img  className='form-img-bg' src={spaceship} alt='Oops!' ></img>
            
          </div>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    )
}

export default Form

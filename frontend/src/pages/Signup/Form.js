import React, {useState} from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import logo from '../../assets/logoSEEKR.svg';
import spaceship from './spaceship.svg';
import './Form.css';
const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    async function submitForm(values){
        
        setIsSubmitted(true);
    }
   
    return (
        
        
        <div className="bg" >
        <div className='form-container'>
          <div className='form-content-left'>
            <img className='form-img' src={logo} alt='Oops!' />
            <img  className='form-img-bg' src={spaceship} alt='Oops!' ></img>
            
          </div>
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSignup submitForm={submitForm} />
          )}
        </div>
        </div>
        
      
    )
}

export default Form

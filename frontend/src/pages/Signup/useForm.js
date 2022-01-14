import { useState, useEffect } from "react";
import axios from '../../services/api';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/user';

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        username:'',
        password:'',
        repasswrd:'',
        email:'',
        isreferee: true,
        isreferrer: false,
    });
    const { auth } = useAuth();
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [interests, setInterests] = useState([]);
    const [isReferer, setIsReferer] = useState(0);

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setValues({
            ...values, [name]: value
        });
    };
    const handleInterestChange=(e)=>{
       let array = []
       for(let key in e){
           array.push(e[key].value);
       }
       setInterests(array)
    }
    const handleIsRefererChange = (e) =>{
        setIsReferer(e.value);
    }

    async function handleSubmit (e){
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        try {
            const response = await axios.post('/signup', {
                
                    name: values.name,
                    username: values.username,
                    password: values.password,
                    email: values.email,
                    interests: interests,
                    isreferer: isReferer

                    
                
            })
            auth(response.data);
            history.push('/main');
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            callback();
        }
    }, [errors])
    return {handleIsRefererChange, handleInterestChange, handleChange, values, handleSubmit, errors };
};
export default useForm;
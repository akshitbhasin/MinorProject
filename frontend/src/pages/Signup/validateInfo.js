export default function validateInfo(values){
    let errors= {}
    if(!values.name){
        errors.name = "Name Required"
    }
    if(!values.username.trim()){
        errors.username = "Username Required"
    }

    if(!values.email){
        errors.email = "Email Required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }
      if (!values.password) {
        errors.password = 'Password is required';
      } else if (values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
      }
    
      if (!values.repassword) {
        errors.repassword = 'Password is required';
      } else if (values.repassword !== values.password) {
        errors.repassword = 'Passwords do not match!';
      }
      return errors;
    }
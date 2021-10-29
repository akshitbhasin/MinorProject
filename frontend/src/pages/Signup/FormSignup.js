import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
        <div className="form-content-right" >
            <form className="form" onSubmit={handleSubmit} >
                <h1>Get Started With Us Today! Create Your Account by Filling the Information Below</h1>
                
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">Name: </label>
                    <input id="name" type="text" className="form-input" name="name" placeholder="Enter Your Name" value={values.name} onChange={handleChange}></input>
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">UserName: </label>
                    <input id="username" type="text" className="form-input" name="username" placeholder="Enter Your Username" value={values.username} onChange={handleChange}></input>
                    {errors.username && <p>{errors.username}</p>}
                </div>
                
                
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">Password: </label>
                    <input id="password" type="password" className="form-input" name="password" placeholder="Enter Your Password" value={values.password} onChange={handleChange}></input>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="repassword" className="form-label">Confirm Password: </label>
                    <input id="repassword" type="password" className="form-input" name="repassword" placeholder="Re-Enter Your Password" value={values.repassword} onChange={handleChange}></input>
                    {errors.repassword && <p>{errors.repassword}</p>}
                </div>

                
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email: </label>
                    <input id="email" type="email" className="form-input" name="email" placeholder="Enter Your Email" value={values.email} onChange={handleChange}></input>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <label htmlFor="isreferee" className="form-label">I'm Here To: </label>
                    <div>
                        <label className="radio-labels">Seek Referals:</label>
                        <input id="isreferee" type="radio" className="form-input" name="isreferee" value="givereferals" value={values.isreferee} onChange={handleChange}></input>
                    </div>
                    <div>
                        <label className="radio-labels">Give Referals:</label>
                        <input id="isreferee" type="radio" className="form-input" name="isreferee" value="givereferals"value={values.isreferrer} onChange={handleChange} ></input>
                    </div>
                </div>
                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">Already Have An Account? Login <a href="/auth">Here</a></span>
            </form>
        </div>
    )
}

export default FormSignup

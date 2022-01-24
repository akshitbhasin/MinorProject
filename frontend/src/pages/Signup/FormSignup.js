import React from 'react'
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
const options = [
    { value: 'C++', label: 'C++' },
    { value: 'C', label: 'C' },
    { value: 'Java', label: 'Java' },
    { value: 'Python', label: 'Python' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'React', label: 'React' },
    { value: 'Angular', label: 'Angular' },
    { value: 'Express', label: 'Express' },
    { value: 'Vue', label: 'Vue' },
    { value: 'SQL', label: 'SQL' },
    { value: 'MongoDB', label: 'MongoDB' },
    { value: 'NodeJS', label: 'NodeJS' },
    { value: 'Express', label: 'Express' },
    { value: 'Django', label: 'Django' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'TenserFlow', label: 'TensorFlow' },
    { value: 'OpenCV', label: 'OpenCV' },
    { value: 'AWS', label: 'AWS' },
    { value: 'Azure', label: 'Azure' },
    { value: 'Flask', label: 'Flask' },
    { value: 'Spring', label: 'Spring' },
]

const FormSignup = ({submitForm}) => {
    const {handleLocationsChange, handleIsRefererChange, handleInterestChange, handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

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
                    <label htmlFor="Interests" className="form-label" name = "interests">Pick Your Interests: </label>
                    <Select options={options} isMulti components={animatedComponents} name="Interests" onChange={handleInterestChange}/>
                </div>
                <div className="form-inputs">
                    <label htmlFor="Locations" className="form-label" name = "locations">Pick Your Locations: </label>
                    <Select options={[
                        {value: "Gurugram", label: "Gurugram"},
                        {value: "Noida", label: "Noida"},
                        {value: "Bangalore", label: "Bangalore"},
                        {value: "Hyderabad", label: "Hyderabad"},
                        {value: "Pune", label: "Pune"},
                        {value: "Mumbai", label: "Mumbai"},]} isMulti components={animatedComponents} name="Locations" onChange={handleLocationsChange}/>
                </div>

                <div className="form-inputs">
                    <label htmlFor="isReferer" className="form-label">I'm Here For: </label>
                    <Select options={[
                         { value: '0', label: 'Seek Referals' },
                         { value: '1', label: 'Give Referals' },
                         

                    ]}  name="isReferer" onChange={handleIsRefererChange}/>
                </div>            

                <button className="form-input-btn" type="submit">Sign Up</button>
                <span className="form-input-login">Already Have An Account? Login <a href="/auth">Here</a></span>
                
            </form>
        </div>
    )
}

export default FormSignup

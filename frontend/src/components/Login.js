
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();

    const userSubmit = async (formdata) => {
        console.log(formdata);

        // 1. url
        // 2. request method
        // 3. data
        // 4. Data format

        const res = await fetch('http://localhost:5000/user/authenticate', {
            method: 'POST',
            body : JSON.stringify(formdata),
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        if(res.status === 200){
            Swal.fire({
                icon : 'success',
                title : 'Login Successful',
                text : 'Greetings! you are now logged in'
            })
            res.json().then(data => {
                console.log(data);
                sessionStorage.setItem('user', JSON.stringify(data));
                navigate('/dashboard');
            })
        }else if(res.status === 400){
            Swal.fire({
                icon : 'error',
                title : 'Login Failed',
                text : 'Invalid username or password'
            })
        }else{
            Swal.fire({
                icon : 'error',
                title : 'Login Failed',
                text : 'Something went wrong'
            })
        }

    }

    return (
        <div> 
            <div className="col-md-4 mx-auto bg-light">
                <div className="card mt-5">
                    <div className="card-body">

                        <Formik initialValues={{email : '', password : ''}} onSubmit={userSubmit}>
                            {({values, handleChange, handleSubmit}) => (
                                <form onSubmit={handleSubmit}>
                                    
                                    <h3 className="text-center">Login Here</h3>
                                    <hr />

                                    <label className='mt-4'>Email</label>
                                    <input value={values.email} onChange={handleChange} id="email" className='form-control' />
                                    
                                    <label className='mt-4'>Password</label>
                                    <input value={values.password} onChange={handleChange} id="password" type="password" className='form-control' />
                                
                                    <button className='btn btn-secondary mt-5'>Login Now</button>
                                    <p></p>
                                    <p>Don't have an account? <a href='signup'>Sign Up</a></p>

                                </form>
                            )}
                        </Formik>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login;
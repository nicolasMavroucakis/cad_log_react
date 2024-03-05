import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const handleSubmit = (event = > {
        setValues
    })


    const handleSubmit = (event) => (
        event.preventDefault()
    )
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100 vw-100 bg-blue'>
            <div className='bg-white p-3 rounded w-250'>
                <h2>Log-in</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter Email' className='form-control rounded-0' onChange={handleSubmit}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' className='form-control rounded-0' onChange={handleSubmit}/>
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Log-in</button>
                    <p>You agree to the terms and policies</p>
                    <Link to='/signup' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Create Account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login;
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleRegister = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        createUserWithEmailAndPassword(email, password);
    };
    let showError;
    if (error) {
        showError = <p className='text-danger'>{error.message}</p>
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='please enter your name' />
                <input ref={emailRef} type="email" name="email" id="" placeholder='Email Address' required />
                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <GoogleLogin />
            {showError}
            <p>Already have an account <Link to="/login" className='text-danger pe-auto text-decoration-none'>
                Please Login</Link>
            </p>
        </div>
    );
};

export default Register;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleLoginSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    };

    let showError;
    if (error) {
        showError = <p className='text-danger'>{error.message}</p>
    }

    if (loading || sending) {
        return <Loading />
    }

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast("sent email")
        } else {
            toast('place enter your email')
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-success text-center mt-2'>Please login</h2>
            <ToastContainer />
            {showError}
            <GoogleLogin />
            <form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit" className='w-100'>Submit</Button>
            </form>
            <GoogleLogin />
            {showError}
            <div>
                <p>New to My Kitchen? <Link to="/register" className='text-danger pe-auto text-decoration-none'>
                    Please Register</Link>
                </p>
            </div>
            <div className="mt-4 text-center">
                <p className="text-sm">Forget Password ?<button
                    className="btn btn-Link text-blue-600 hover:underline" onClick={passwordReset}>Reset Password</button></p>
            </div>
        </div >
    );
};

export default Login;
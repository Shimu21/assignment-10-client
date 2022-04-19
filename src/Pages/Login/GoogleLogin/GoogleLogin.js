import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let showError;
    if (error) {
        showError = <p className='text-danger'>{error.message}</p>
    }
    if (loading) {
        return <Loading />
    }
    if (user) {
        navigate('/home');
    }

    return (
        <div>
            {showError}
            <button onClick={() => signInWithGoogle()} className='btn btn-success mt-3 w-100'><FcGoogle /> <span>Login With Google</span></button>
        </div>
    );
};

export default GoogleLogin; 
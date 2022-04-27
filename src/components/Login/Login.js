import React from 'react';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [user, loading, error] = useAuthState(auth);

    let navigate = useNavigate();
    let location = useLocation();
  
  
    let from = location.state?.from?.pathname || "/";
    const handleSignIn = () =>{
        signInWithGoogle();
    }

    if(user){
        navigate(from, {replace: true});
    }
    return (
        <div className='container text-center mt-5'>
            {/* <h2>login</h2> */}
            <button  onClick={() => handleSignIn()} type='button' className='btn btn-warning'>Google Sign In</button>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";


const Register = () => {

    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        }) 
    }

    const auth = getAuth();

    const {signInUsingGoogle} = useAuth();


    const toggle = e => {
        setIsLogin(e.target.checked);
    }
    
    const handleEmail = e => {
        SetEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length<6){
            setError('Password must be at least 6 characters')
            return;
        }

        isLogin ? login(email, password) : registerNewUser(email, password); 

    }

    const login = (email, password) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        })

        .catch(error => {
            setError(error.message);
        })
    }

    const registerNewUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            setError('');
        }) 

        .catch(error => {
            setError(error.message);
        })
    }

    return (
        <div className="mx-5 d-flex align-items-center flex-column">
        <h1 className="text-primary mt-5 mb-5">{isLogin ? "Please Login":"Register : Create Account"}</h1>
            <form onSubmit={handleRegistration}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleEmail} type="email" className="form-control mx-5" id="inputEmail3" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePassword}  type="password" className="form-control mx-5" id="inputPassword3" required/>
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-10 offset-sm-2">
                    <div class="form-check">
                        <input onChange={toggle}  class="form-check-input mx-5" type="checkbox" id="gridCheck1"/>
                        <label class="form-check-label" for="gridCheck1">
                        Already have an account ?
                        </label>
                    </div>
                    </div>
                </div>

                <div className=" row mb-3 text-danger mx-5">
                    {error}
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? "Login":"Register"}</button>
                </form>

            <div>
            <p className=" mt-3 ">You can Sign in with Google</p>

                <button onClick={signInUsingGoogle, handleGoogleLogin}className="btn btn-primary">Google Sign In</button>    
            </div> 
        </div>
    );
};

export default Register;
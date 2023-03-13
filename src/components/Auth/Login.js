import React from 'react';
import {useAuth} from './AuthProvider';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '../Buttons/BackBtn';



function Login()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();
    const navigate = useNavigate();

    function onAttemptLogin(e)
    {
        e.preventDefault();
        authContext.signin(userRef.current.value,pwdRef.current.value);
        navigate('/');
    }

    return(
        <>
        < BackBtn />
        <div id="loginContainer">
            <div id="loginLabel">Login</div>
            <form>
                <input placeholder="youremail@email.com" type="text" ref={userRef}></input>
                <input type="text" placeholder="password" ref={pwdRef}></input>
                <button className="loginBtn" onClick={onAttemptLogin}>Login</button>
            </form>
        </div>
        </>

    )
};


export default Login;
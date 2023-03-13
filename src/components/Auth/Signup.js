import React from 'react';
import {useAuth} from './AuthProvider';
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import BackBtn from '../Buttons/BackBtn';

function Signup()
{
    const authContext = useAuth();
    const userRef = useRef();
    const pwdRef = useRef();
    const navigate = useNavigate();

    function onAttemptSignup(e)
    {
        e.preventDefault();
        authContext.signup(userRef.current.value,pwdRef.current.value)
        navigate('/');
    }

    return(
        <>
        < BackBtn />
        <div id="loginContainer">

            <div id="loginLabel">Sign Up</div>
            <form>
                <input  placeholder="youremail@email.com" type="text" ref={userRef}></input><br/>
                <input placeholder="password" type="text" ref={pwdRef}></input><br/>
                <button onClick={onAttemptSignup}>SignUp</button>
            </form>
        </div>
        </>
    )
};


export default Signup;
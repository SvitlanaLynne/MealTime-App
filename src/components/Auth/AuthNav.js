import React from "react";
import { Link } from "react-router-dom";
import {useAuth} from './AuthProvider';
import UserInfo from './UserInfo';

function AuthNav() {
    const loginInfo = useAuth();
  
  return (

    <div className="authnav">
        {(loginInfo.currentUser) ? <Link to="/logout"> Logout </Link> : <Link to="/login"> Login </Link>}
        {(loginInfo.currentUser) ? null : <Link to="/signup"> SignUp </Link>}

        <UserInfo/>
      
    </div>
  )
}

export default AuthNav;
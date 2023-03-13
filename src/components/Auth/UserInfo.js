import React from 'react';
import {useAuth} from './AuthProvider';

function UserInfo()
{
    const user = useAuth()

    return(
        
        <div id='userName'>{user.currentUser ? user.currentUser.email.toString().split("@")[0] : null}</div>

    )

}

export default UserInfo;
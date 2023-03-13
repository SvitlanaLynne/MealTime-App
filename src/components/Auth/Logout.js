import { useNavigate } from 'react-router-dom';
import {useAuth} from './AuthProvider';


function Logout()
{
    const navigate = useNavigate();
    const loginInfo = useAuth()

    loginInfo.signout();
    return(
        navigate('/')
    )
};

export default Logout;
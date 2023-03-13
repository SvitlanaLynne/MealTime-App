import { Link } from 'react-router-dom';
import React from 'react';

function Navigation()
{
    return(
        <div>

        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='input'>Input Page</Link>
        <Link className='navlink' to='history'>History</Link>

        </div>
    )
};

export default Navigation;
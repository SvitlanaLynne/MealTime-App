import React from "react";
import { useNavigate } from "react-router-dom";


function CancelInputBtn ()
{
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/')
    };    

    return(
        <div className="cancelBackBtn" onClick={navigateToHomePage}>
            Cancel
        </div>
    )
};

export default CancelInputBtn;
import React from "react";
import { useNavigate } from "react-router-dom";


function BackToHomePage ()
{
    const navigate = useNavigate();
    const navigateToHomePage = () => {
        navigate('/')
    };    

    return(
        <div className="cancelBackBtn" onClick={navigateToHomePage}>
            Back
        </div>
    )
};

export default BackToHomePage;
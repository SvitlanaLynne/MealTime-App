import React from "react";
import { useNavigate } from "react-router-dom";


function AddMealTimeBtn ()
{
    const navigate = useNavigate();
    const navigateToInputPage = () => {
        navigate('/input')
    };    

    return(
        <div className="button" onClick={navigateToInputPage}>
            add Meal Time
        </div>
    )
};

export default AddMealTimeBtn;
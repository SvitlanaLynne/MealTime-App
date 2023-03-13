import React from "react";
import { useNavigate } from "react-router-dom";

function HistoryTab (){

    const navigate = useNavigate();
    const navigateToHistoryPage = () => {
        navigate('/history')}

    return(
        <div id="historyTab" onClick={navigateToHistoryPage}>History</div>
    )
};

export default HistoryTab;
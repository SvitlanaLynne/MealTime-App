
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useRef } from "react";
import CancelInputBtn from "./Buttons/CancelInputBtn";
import { useNavigate } from "react-router-dom";


function InputPage()
{
    const amountFieldInputData = useRef();
    const timePickedData = useRef();
    const navigate = useNavigate();
    
    function PickTimeField()
    {
        const [startDate, setStartDate] = useState(new Date());
        const timeToSave = startDate.toString().split(" ")[4].substring(0,5);
    
        return(
            <>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={5}
                    timeCaption="Time"
                    dateFormat="h:mm aa"

                />
                
                <div hidden ref={timePickedData}>{timeToSave}</div>
    
                <div className="lightButton" onClick={() => setStartDate(new Date())}>Now</div>
            </>
        )
    };
    
    function AmountField()
    {
        
        return(
            <>
                <input type="text" id="amountField" placeholder=" - " ref={amountFieldInputData}></input>
                <div id="ml">ml</div>
                {/* <div>{enteredData}</div> */}
            </>
        )
    };
    
    function SaveButton()
    {
    
            function handleSubmit(e)
            {
                e.preventDefault();
        
                let gatheredDataObj = {time: timePickedData.current.innerText, amount: amountFieldInputData.current.value}

                fetch(' http://localhost:8000/mealtime', {
                    method: "POST",
                    headers: { "Content-Type": "application/json"},
                    body: JSON.stringify(gatheredDataObj)
                }).then( () => navigate('/'))
                       
            }
    
        return(
            <div onClick={handleSubmit} className="saveButton">Save</div>
        )
    };



    return(
        <>
            <div className="linewhite"></div>

            < CancelInputBtn />

            <div id="inputContainer">
                <div id="dateInputBlock">{PickTimeField()}</div>
                <div id="amountInputBlock">{AmountField()}</div>
                <div>{SaveButton()}</div>
            </div>

            

        </>
    )

};

export default InputPage;






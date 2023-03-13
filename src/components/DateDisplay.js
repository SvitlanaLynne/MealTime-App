import React from "react";



function DateDisplay()
{

    const customDateArray = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: 'numeric' }).formatToParts(new Date()),
    dateParts = {};

    customDateArray.map(({type,value}) => dateParts[type]=value);

    const date = `${dateParts.day} ${dateParts.month}`

    return(
        <>
        <div className ="date">{date}</div>
        <div className="line"></div>
        </>

    )
};

export default DateDisplay;
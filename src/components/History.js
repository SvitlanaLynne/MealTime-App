import React from 'react'
import { useState, useEffect } from 'react';
import BackToHomePage from './Buttons/BackBtn';
import MealTimeFixedData from './MealTimeFixedData';

function History ()
{
    const [mealtime, setMealtime] = useState([]);


    useEffect (() => {
        fetch('http://localhost:8000/mealtime')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMealtime(data);
            })
    }, []);


    return (
        <>
            < BackToHomePage />
                <div className="weekday">Today</div>
                <div id="historyContainer">
                    < MealTimeFixedData mealtime = {mealtime} />
                </div>
                <div className="weekday">Yesterday</div>
        </>
    )
}

export default History;
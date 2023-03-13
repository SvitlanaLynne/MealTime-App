import AddMealTimeBtn from "./Buttons/AddMealTimeBtn";
import React from "react";
import DateDisplay from "./DateDisplay";
import { useState, useEffect } from 'react';
import MealTimeFixedData from './MealTimeFixedData';
import HistoryTab from "./Buttons/HistoryTab";



function Home ()
{
    const [mealtime, setMealtime] = useState([]);


    useEffect (() => {
        fetch('http://localhost:8000/mealtime')
            .then(res => res.json())
            .then(data => {

                setMealtime(data.slice(-3));
            })
    }, []);


    return (
        <div id="homeContainer">
            <div id="homeCoreContainer">
                < DateDisplay />
                < MealTimeFixedData mealtime = {mealtime}/>
                < AddMealTimeBtn />
            </div>
            < HistoryTab />
        </div>
    )
};

export default Home;
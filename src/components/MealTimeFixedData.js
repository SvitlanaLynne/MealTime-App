import React from "react";
import EditBtn from "./Buttons/EditBtn";

function MealTimeFixedData({ mealtime })
{
    return (
        <>
        <div id="mealTimeContainer">
            {mealtime.map((entry) => (
                <div id="MealtimeEntryBlock">
                    <div className="entryDataLine" key={entry.id}>
                        <p>{ entry.time }</p>
                        <p>{ entry.amount } ml</p>
                    </div> 

                    < EditBtn />
                </div>
                
            ))}
        </div>
        </>
    )
};

export default MealTimeFixedData;
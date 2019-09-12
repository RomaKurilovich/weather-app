import React from "react";

let Info = (props) =>{
    return(
        <div>
            <h2>Info</h2>
            <p>temperature: {props.data.temp}</p>
            <p>pressure: {props.data.pressure}</p>
            <p>humidity: {props.data.humidity}</p>
            <p>wind speed: {props.data.windSpeed}</p>
        </div>
    )
}

export default Info;
import React from "react";
import "./../App.css"

let Info = (props) =>{

    return(<>
       { props.data.temp && <div className="infoWeath"> 
            <p>temperature: {props.data.temp}</p>
            <p>pressure: {props.data.pressure}</p>
            <p>humidity: {props.data.humidity}</p>
            <p>wind speed: {props.data.windSpeed}</p>
        </div> }
        </>
    )
}

export default Info;
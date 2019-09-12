
import React from "react";

let Form = (props) =>{

    let updateCityText = (e) =>{
        debugger
        props.changeCity(e.currentTarget.value)
    }

    return(<>
    <h2>Form</h2>
        <form>
            <input type="text" name="city" placeholder="city" value={props.city} onChange={updateCityText}/>
            <button type="button" onClick={()=>{props.getWeatherFromOpenWeatherMap()}}>Get weather</button>
        </form></>
    )
}

export default Form;
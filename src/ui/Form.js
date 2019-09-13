import React, {useState, useEffect} from "react";
import "./../App.css"
import SourceButton from "./ButtonSource";

let Form = (props) =>{

    let [selectedFirst, setSelectedFirst] = useState(false)
    let [selectedSecond, setSelectedSecond] = useState(false)

    useEffect(()=>{
        if (props.selected === 'OpenWeatherMap' && props.temp) {
            setSelectedFirst(true)
        }
    }, [props.temp])

    let onSelectedOWM = () => {
        props.changeSelected('OpenWeatherMap');
        setSelectedFirst(true);
        setSelectedSecond(false)
    } 

    let onSelectedWB = () => {
        props.changeSelected('Weatherbit');
        setSelectedFirst(false);
        setSelectedSecond(true)
    } 

    let updateCityText = (e) =>{
        props.changeCity(e.currentTarget.value)
    }

    let getWeathet = () => {
        if (props.city){
        props.getWeatherFromOpenWeatherMap();
        props.getWeatherFromWeatherbit();
    } else {alert('enter city')}
}

    return(
        <form className="formWeath">
            <input type="text" name="city" placeholder="city" value={props.city} onChange={updateCityText}/>
            <button type="button" onClick={getWeathet}>Get weather</button>
                 <div className="source">
                     <div className="sourceText"> 
                         Weather source:
                    </div>
                 <div className="sourceButton">
                 <SourceButton selected={selectedFirst} onClick={onSelectedOWM}>Open Weather Map</SourceButton>
                 <SourceButton selected={selectedSecond} onClick={onSelectedWB}>Weather Bit</SourceButton>
                 </div>

                 </div>
        </form>
    )
}

export default Form;
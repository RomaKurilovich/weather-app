import React from "react";
import {connect} from 'react-redux';
import { getWeatherFromOpenWeatherMap, changeCity } from "../redux/weatherData";
import Form from "./Form";
import Weather from "./Weather";
import Info from "./Info";

let WeatherApp = (props) =>{
    debugger
    return(
        <div>
            <Info data={props.data}/>
            <Form getWeatherFromOpenWeatherMap={props.getWeatherFromOpenWeatherMap} city={props.city} changeCity={props.changeCity}/>
            <Weather/>
        </div>
)}

let mapStateToProps = (state) =>({
    city: state.data.city,
    data: state.data.OpenWeatherMap.data
})

let mapDispatchToProps = (dispatch) =>({
    getWeatherFromOpenWeatherMap: ()=>{dispatch(getWeatherFromOpenWeatherMap())},
    changeCity: (value)=>dispatch(changeCity(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp) ;
import React from "react";
import { connect } from 'react-redux';
import { getWeatherFromOpenWeatherMap, changeCity, getWeatherFromWeatherbit, changeSelected } from "../redux/weatherData";
import Form from "./Form";
import Weather from "./Weather";
import Info from "./Info";
import { getData } from "../redux/selectors";
import '../App.css'

let WeatherApp = (props) => {
    return (
        <div className="wrapper">
            <div className='main'>
                <div className="row">
                    <div className="info">
                        <Info data={props.data} />
                    </div>
                    <div className="form">
                        <Form getWeatherFromOpenWeatherMap={props.getWeatherFromOpenWeatherMap}
                            city={props.city} changeCity={props.changeCity}
                            getWeatherFromWeatherbit={props.getWeatherFromWeatherbit}
                            changeSelected={props.changeSelected} 
                            selected={props.selected}
                            temp={props.data.temp}/>
                        <Weather data={props.data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

let mapStateToProps = (state) => ({
    city: state.data.city,
    data: getData(state),
    selected: state.data.selected,
})

let mapDispatchToProps = (dispatch) => ({
    getWeatherFromOpenWeatherMap: () => { dispatch(getWeatherFromOpenWeatherMap()) },
    changeCity: (value) => dispatch(changeCity(value)),
    getWeatherFromWeatherbit: () => { dispatch(getWeatherFromWeatherbit()) },
    changeSelected: (value) => dispatch(changeSelected(value))
})


export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
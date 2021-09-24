import React , {FC} from 'react'
import { WeatherInfo } from '../store/types'

interface WeatherProps {
    data : WeatherInfo
}
const  Weather : FC <WeatherProps> = ({data})=>{
    return (

        <div>
            <h1>{data.name}-{data.sys.country}</h1>
            <p>{data.weather[0].description}</p>
            <p><img src={`http://openweather.org/img/wn/${data.weather[0].icon}` }alt="" /></p>
            <div>
                <h4>temperature</h4>
                <p>{data.main.temp}</p>
                <p>{data.main.temp}</p>
               
            </div>
            <div>
                <h4> Humidity : {data.main.humidity}</h4>
                <h4>pressure : {data.main.pressure}</h4>
                <h4>windspeed : {data.wind.speed}</h4>
            </div>
        </div>
    )

    
}
export default Weather
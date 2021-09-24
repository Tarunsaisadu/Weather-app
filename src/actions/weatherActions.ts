import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import { FETCH_WEATHER,WeatherAction,WeatherInfo, WeatherError,FETCH_WEATHER_ERROR,FETCH_WEATHER_LOADING} from "../store/types";

export const fetchWeather = (city:string) : ThunkAction<void,RootState,null,WeatherAction> =>{
    return  async dispatch =>{
        try{
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b904a6221f347fa4f5f753fd6fb87a74`)
            console.log(response)
            if(!response.ok){
                const responseData : WeatherError = await response.json()
                throw new Error(responseData.message)
            }
           const responseData : WeatherInfo= await response.json()

           dispatch({
               type:FETCH_WEATHER,
               payload: responseData 
           });
        }
        catch (error:any){
            dispatch ({
                type:FETCH_WEATHER_ERROR,
                payload: error.message
            })
        }
    }
}

export  const fetchWeatherLoading =():WeatherAction =>{
           return{
               type: FETCH_WEATHER_LOADING
           }
}

export const fetchError = () : WeatherAction=>{
    return{
        type :FETCH_WEATHER_ERROR,
        payload:''
    }
}
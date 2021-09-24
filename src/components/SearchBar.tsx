import React,{ FC, FormEvent, useState } from "react";
import { Container,Form,Button } from "react-bootstrap";
import {useDispatch} from "react-redux"
import {setAlert} from "../actions/alertActions"
import {fetchWeather,fetchWeatherLoading} from "../actions/weatherActions"
interface SearchBarProps {
    title :string ;
}
const SearchBar : FC<SearchBarProps> = ({title}) =>{
    const dispatch = useDispatch();
    const [city,setCity] = useState('')


    const handleChange  = (e: FormEvent<HTMLInputElement>) =>{
        setCity(e.currentTarget.value)
    }

     const handleSubmit = (e: FormEvent<HTMLFormElement>)=>{
         e.preventDefault();
         
         if (city.trim()===" "){
             return dispatch(setAlert("no city entered"));
         }

         dispatch(fetchWeatherLoading())
         dispatch(fetchWeather(city))
        //  setCity('')
     }
 
    return (
        <div>
         <Container>
             <h1>{title}</h1>
             <form className = "py-5" onSubmit={handleSubmit}>
             <input
              type="text"
              placeholder="Enter city here"
              value ={city} 
              onChange={handleChange}
               />
            <Button className="btn btn-primary">
                search
            </Button>
             </form>

         </Container>
        </div>

    );

}
export default SearchBar
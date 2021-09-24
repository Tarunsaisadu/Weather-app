import React,{FC} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import SearchBar from "./components/SearchBar"
import Weather from './components/Weather';
import { fetchError } from './actions/weatherActions';
import { RootState } from './store';
import Alertcomponent from './components/Alertcomponent';
import { setAlert } from './actions/alertActions';


const App:FC=()=> {

 const dispatch = useDispatch()
 const WeatherInfo= useSelector((state:RootState)=>state.weather.data)
 const loading = useSelector((state:RootState)=>state.weather.loading)
 const error = useSelector((state:RootState)=>state.weather.error)
 const alertMsg = useSelector((state: RootState) => state.alert.message);
  return (
    <div className="App">
      <SearchBar title="enter your location"/>
      {loading? <h2>Loading..</h2> : WeatherInfo && <Weather data = {WeatherInfo}/>}
      {alertMsg && <Alertcomponent message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
      {error && <Alertcomponent message={error} onClose={() => dispatch(fetchError())} />}
    </div>
  );
}

export default App;

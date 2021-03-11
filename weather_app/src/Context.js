import React, { useState, useEffect } from 'react' 
import Current from './components/Current'
import dateFormat from 'dateformat'

const Context = React.createContext()

function ContextProvider({children}) {
    const [ location, setLocation ] = useState('visalia')
    const [ hasLoaded, setHasLoaded ] = useState(false)
    const [ error, setError ] = useState(false)
    const [ forecastError, setForecastError ] = useState(true)
    const [ weather, setWeather ] = useState({
        temp: '',
        conditions: '',
        wind: '',
        location: ''

    })
    const [ forecast, setForecast ] = useState([
        
    ])



    function handleSubmit(event) {
    event.preventDefault()
    getForecast()
      
    let url=`http://api.weatherapi.com/v1/current.json?key=2999e37b2517493d91b25106210202&q=
    ${location}`
    fetch(url)
    .then((response) => {
        if (!response.ok) throw new Error(response.status)
        else return response.json()
    })
    .then((data) => {
        console.log(data)
        setHasLoaded(true)
        setWeather({
            temp: Math.round(data.current.temp_f),
            text: data.current.condition.text,
            wind: data.current.wind_mph,
            icon: data.current.condition.icon,
            humidity: data.current.humidity,
            city: data.location.name,
            time: (data.location.localtime).slice(11),
            uv: data.current.uv,
            precip: data.current.precip_in,
            wind: data.current.wind_mph,
            isDay: data.current.is_day

        })
        console.log('data stored')

        console.log(weather)
    })

    
    .catch((error => {
        setError(true)
        setHasLoaded(false)
        console.log('error: ' + error)
        setWeather({
            temp: '',
            conditions: '',
            wind_mph: ''

        })
        
    }))
        
    }
    const getForecast = ()=>  {
        const url = `http://api.weatherapi.com/v1/forecast.json?key=2999e37b2517493d91b25106210202&q=${location}`
      fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(response.status)
        else return response.json()
    })
    .then((data) => {

        const hours = data.forecast.forecastday[0].hour
        setForecast(
           hours
        )
       
        console.log('data stored')
       
    })
    .catch((error => {
        setForecastError(true)
        console.log('error: ' + error)
        
        
    }))
console.log(weather)

console.log(forecast)



        }
   

return (
   <Context.Provider value={{
        weather,
        handleSubmit,
        location,
        setLocation,
        error,
        hasLoaded,
        forecastError,
        forecast,
    }}>
        {children}
   </Context.Provider>
)
}
export { ContextProvider, Context }


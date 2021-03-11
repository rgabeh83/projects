import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../Context'


function Forecast(){

    const { error,  forecastError, forecast, weather} = useContext(Context)

    const wrapper = (weather.isDay === 1) ? 'wrapper' : 'wrapper-night'    
      
    const shortArray = forecast.slice(8, 13)

      return ( 
        <div className={wrapper}>
   { forecastError ?   
              shortArray.map((hour)=> (
                <div>
                <div className="wrapper1" key={hour.time_epoch}>
                     <p>{(hour.time).slice(11)}</p>
                     <img style={{height: '50px', width: '50px'}} src={hour.condition.icon}/>
                    <h2>{Math.round(hour.temp_f)}&#176;</h2>
                      <p>{hour.condition.text}</p>
                  </div>
                   </div>
               ))
                : < h1>city not found</h1> }
 </div>)

   }

             




export default Forecast
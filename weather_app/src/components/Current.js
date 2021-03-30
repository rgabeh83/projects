import React, { useContext } from 'react'
import { Context } from '../Context'
import Moment from 'react-moment'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Card} from 'react-bootstrap'
import Forecast from './Forecast'
import Search from './Search'


function Current(){
    const  { weather, error, isLoading, setError} = useContext(Context)

    const tempStats = (weather.isDay === 1 ) ? 'temp-stats' : 'temp-stats-night'
    const detailedConditions = (weather.isDay === 1 ) ? 'detailed-conditions' : 'detailed-conditions-night'
    // const forecast = (weather.isDay === 1) ? 'wrapper' : 'wrapper-night'
    
    // const number = moment(weather.time, ['HH.mm']).format('hh:mm a')


    return ( 

        
       <div>
           <div className='current-container'>
               {/* <Moment parse="hh:mm">
                   {weather.time}
               </Moment> */}
               <div className="city-time">
                    <p > {(Date().toLocaleString()).slice(0, 16)} </p> 
                    <p>{weather.time}</p>
                    <p>{weather.city}</p>
                </div>
               
                <div className={tempStats}>
                    <h1>{weather.temp}&#176;</h1>  
                    <h3>{weather.text}</h3>
                </div>
                    
                    
                    <div className="temp-pic">
                    <img style={{height:'200px', width: '200px' }}src={weather.icon}/>
                    </div>
            
                 
                 
                
                
            <div className={detailedConditions}>
                <div className='conditions-container'>
                <div className="details humidity"><h3 >{weather.humidity}%</h3>
                            <p>humidity</p>
                            </div>
                         <div className="wind">
                            <h3>{weather.wind}mph</h3>
                            <p>wind</p>
                            </div>
                    <div className="rain">
                    <h3 >{weather.precip}"</h3>
                            <p>precipitation</p>
                    </div>
                    <div className='uv'>
                    <h3 >{weather.uv}</h3>
                            <p>uv index</p>
                    </div>
                    </div>
                    </div>
                    
                    
            </div>
            <div class='forecast'><Forecast/></div>

</div>



            
          
     
  
     )
}
        
        
   

export default Current


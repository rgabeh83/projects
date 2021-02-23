import React, { useContext } from 'react'
import { Context } from '../Context'

function Current(){
    const  { weather } = useContext(Context)

    console.log('hi')
    return (
        
        <div>
        <h1>{ weather === null ? '' : weather.current.temp_f  } &#176;</h1>
        <p>{ weather === null ? '' : weather.current.condition.text}</p>
        <img src={weather ===null ? '' : weather.current.condition.icon}/>
        </div>
    )
}

export default Current
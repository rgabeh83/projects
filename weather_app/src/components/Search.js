import React, { useContext } from 'react'
import { Context } from '../Context'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Alert, Button } from 'react-bootstrap'

function Search({children}) {

    const { handleSubmit, getForecast, location, setLocation, error, hasLoaded, weather } = useContext(Context)

    const dayOrNight = (weather.isDay === 0) ? 'night' : 'day'


    return (
        <div className={dayOrNight}>
            <form className={hasLoaded ? 'search-bar search-button ' : 'search-button search-bar search-bar-not_loaded'}>
            <input s className="bar"
                placeholder="enter city or zip"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                placeHolder="city/zip"
            />
            <button style={{height: '40px'}} className={hasLoaded ? 'search search-button': 'search-button search-bar search-bar-not_loaded'} className="search-button" onClick={handleSubmit}>Go</button>
            </form >
           
        </div>
    )
}

export default Search
import React, { useContext } from 'react'
import { Context } from '../Context'


function Search({children}) {

    const { handleSubmit, location, setLocation } = useContext(Context)

    return (
        <div>
            <form  >
            <input 
                placeholder="enter city or zip"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
            />
            <button onClick={handleSubmit}>Go</button>
            </form >
            <h1>{location}</h1>
        </div>
    )
}

export default Search
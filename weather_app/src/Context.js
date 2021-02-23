import React, { useState, useEffect } from 'react' 

const Context = React.createContext()

function ContextProvider({children}) {
    const [ location, setLocation ] = useState('')
    const [ weather, setWeather ] = useState(null)


    // function handleChange(event) {
        
    //     setLocation(event.target.value)
    // }
    console.log(location)

    function handleSubmit(event) {
        event.preventDefault()
      
    let url=`http://api.weatherapi.com/v1/current.json?key=2999e37b2517493d91b25106210202&q=
    ${location}`
    fetch(url)
    .then(response => response.json())
        .then(data => 
            setWeather(data))
console.log(weather)

    }
   
   
    
   
   
  
    
    


return (
   <Context.Provider value={{
        weather,
        handleSubmit,
        location,
        setLocation

    }}>
        {children}
   </Context.Provider>
)
}

export { ContextProvider, Context }


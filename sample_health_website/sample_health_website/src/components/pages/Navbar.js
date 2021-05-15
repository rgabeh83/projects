import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import  { Button }   from './button'
import './Navbar.css'
import { IconContext } from 'react-icons'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(false)

    const handleClick = () =>  setClick(!click)   
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <div>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo"
                        onClick={closeMobileMenu}>
                        <MdFingerprint className="navbar-icon"/>
                        HealthFul
                    </Link>
                    
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" onClick={closeMobileMenu} className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/services" onClick={closeMobileMenu} className="nav-links">
                                Patient Services
                            </Link>
                        </li>
                        <li className="nav-item" >
                        <Link to="/products" onClick={closeMobileMenu} className="nav-links">
                                Products
                            </Link>
                        </li>
                        <li className="nav-btn">
                            {button ? (
                                <Link to="/signup" className="btn-link">
                                    <Button buttonStyle="btn--outline">My Health</Button>
                                </Link>
                            ) : (
                                <Link to="/signup" className="btn-link">
                                    <Button 
                                        buttonStyle="btn--outline"
                                        buttonSize="btn--mobile"
                                        onClick={closeMobileMenu}>
                                           My Health
                                        </Button>
                                </Link>
                            )}
                            </li>

                    </ul>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Navbar

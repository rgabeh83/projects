import react from 'react' 
import './footer.css'
import { Button } from '../pages/button'
import { Link } from 'react-router-dom'
//Icons 

import {
    FaFacebook, 
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa'
import { MdFingerprint } from 'react-icons/md'

function Footer() {
    return (
        <div className='footer-container'>
        <div className='footer-links'>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>Staff</Link>
              <Link to='/'>Careers</Link>
            </div>
            <div className='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Schedule Appointment</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Locations</Link>
              
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
              <h2>Health Records</h2>
              <Link to='/'>My Health</Link>
            </div>
          </div>
        </div>
        <section className='social-media'>
          <div className='social-media-wrap'>
            <div className='footer-logo'>
              <Link to='/' className='social-logo'>
                <MdFingerprint className='navbar-icon' />
                HealthFul
              </Link>
            </div>
            <small className='website-rights'>LAVISH © 2020</small>
            <div className='social-icons'>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Facebook'
              >
                <FaFacebook />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Instagram'
              >
                <FaInstagram />
              </Link>
              <Link
                className='social-icon-link'
                to={
                  '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </Link>
              <Link
                className='social-icon-link'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </section>
      </div>
        
    )
}

export default Footer
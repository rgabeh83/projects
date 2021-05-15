import React from 'react'
import HeroSection from '../components/heroSection'
import Pricing from '../components/pricing'
import { homeObjOne, homeObjFour, homeObjThree, homeObjFive } from '../components/pages/homePage/data'



function Services() {
    return (
        <>
            
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
            <Pricing />
        </>
    )
}


export default Services
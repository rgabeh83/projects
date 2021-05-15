import React from 'react'
import HeroSection from '../../heroSection'
import Pricing from '../../../components/pricing'
import { homeObjOne, homeObjFour, homeObjThree, homeObjFive } from './data'



function Home() {
    return (
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree} />
        </>
    )
}


export default Home
import React from 'react'
import HeroSection from '../../heroSection'
import Pricing from '../../../components/pricing'
import { homeObjOne } from '../homePage/data'



function Products() {
    return (
        <>
           <Pricing/>
           <HeroSection {...homeObjOne} />
        </>
    )
}


export default Products
import React from 'react'
import HeroSection from '../../heroSection'
import Pricing from '../../../components/pricing'
import { homeObjOne } from '../homePage/data'



function Products() {
    return (
        <>
           <HeroSection {...homeObjOne} />
           <Pricing/>
        </>
    )
}


export default Products
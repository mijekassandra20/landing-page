import React from 'react'

import Navbar from './Navbar'
import MainLanding from './MainLanding'

const LandingPage = () => {
    return (
        <div className='landing-wrapper'>
            <div className='nav-wrapper'>
                <Navbar />
            </div>
            <MainLanding />
        </div>
    )
}

export default LandingPage
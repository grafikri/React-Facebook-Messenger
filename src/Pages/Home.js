import React from 'react'
import './../home.css'

import LeftSection from './../Sections/LeftSection'
import RightSection from './../Sections/RightSection'

class Home extends React.Component {
    render () {
        return (
            <div className="chatPanel">
                <div className="leftPanel">
                    <LeftSection />
                </div>
                <div className="rightPanel">
                    <RightSection />
                </div>
            </div>
            
        )
    }
}


export default Home

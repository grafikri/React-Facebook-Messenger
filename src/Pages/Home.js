import './Home.css'

import React from 'react'
import LeftSection from './../Sections/LeftSection'
import RightSection from './../Sections/RightSection'



class Home extends React.Component {
  render() {
    return (
      <div className="Chat-Panel">
        <div className="Left-Panel">
          <LeftSection />
        </div>
        <div className="Right-Panel">
          <RightSection />
        </div>
      </div>

    )
  }
}


export default Home

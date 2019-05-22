import './Home.css'

import React from 'react'
import LeftSection from './../Sections/LeftSection'
import RightSection from './../Sections/RightSection'

import { MessageTools } from '../Components'


class Home extends React.Component {
  render() {
    return (
      <div className="Chat-Panel">
        <div className="Left-Panel">
          {/* <LeftSection /> */}
        </div>
        <div className="Right-Panel">
          <MessageTools />
          {/* <RightSection /> */}
        </div>
      </div>

    )
  }
}


export default Home

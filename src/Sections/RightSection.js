import React from 'react'

import Header from './../Components/Header'
import { WriteIcon, GearIcon } from '../Components/Icons'

class LeftSection extends React.Component {
  render() {
    return (
      <div>
        {/* Right Section */}
        <div>

          <Header LeftIcons={[<WriteIcon />, <GearIcon />]} RightIcons={[<GearIcon />]} />

        </div>
      </div>
    )
  }
}

export default LeftSection
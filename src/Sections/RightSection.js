import React from 'react'
import { WriteIcon, GearIcon } from '../Components/Icons'
import Header from './../Components/Header'


class RightSection extends React.Component {
  render() {
    return (
      <div>
        <Header title="Tony Stark" subTitle="3 dakika önce aktifti" rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]} />
        Right Section
      </div>
    )
  }
}

export default RightSection
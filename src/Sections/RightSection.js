import React from 'react'
import './RightSection.css'
import { ArrowIcon, GearIcon } from '../Components/Icons'
import { Header, ReactiveTitle } from './../Components'


class RightSection extends React.Component {
  render() {
    return (
      <div className="Right-Section">

        <div className="Header-Container">
          <Header title="Tony Stark" subTitle="3 dakika önce aktifti" rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]} />
        </div>

        <ReactiveTitle />


        Right Section
      </div>
    )
  }
}

export default RightSection
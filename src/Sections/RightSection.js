import React from 'react'
import { ArrowIcon, GearIcon } from '../Components/Icons'
import { Header, ReactiveTitle } from './../Components'


class RightSection extends React.Component {
  render() {
    return (
      <div>


        <Header title="Tony Stark" subTitle="3 dakika önce aktifti" rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]} />

        <ReactiveTitle />


        Right Section
      </div>
    )
  }
}

export default RightSection
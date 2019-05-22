import './Home.css'

import React from 'react'
import LeftSection from './../Sections/LeftSection'
import RightSection from './../Sections/RightSection'

import { MessageTools } from '../Components'
import { FlatGalleryIcon, FlatStickerIcon, FlatGifIcon, FlatSmileIcon, FlatMicIcon, FlatGameIcon, FlatCameraIcon, FlatLikeIcon } from '../Components/Icons'


class Home extends React.Component {
  render() {
    return (
      <div className="Chat-Panel">
        <div className="Left-Panel">
          {/* <LeftSection /> */}
        </div>
        <div className="Right-Panel">
          <MessageTools leftIcons={[<FlatGalleryIcon />, <FlatStickerIcon />, <FlatGifIcon />, <FlatSmileIcon />, <FlatMicIcon />, <FlatGameIcon />, <FlatCameraIcon />]} rightIcons={[<FlatLikeIcon />]} />
          {/* <RightSection /> */}
        </div>
      </div>

    )
  }
}


export default Home

import './MessageTools.css'

import React from 'react'
import { FlatGalleryIcon } from './Icons'


class MessageTools extends React.Component {
  render() {
    return (
      <div className="Message-Tools">
        <div className="Left">
          <FlatGalleryIcon />
          <FlatGalleryIcon />
          <FlatGalleryIcon />
          <FlatGalleryIcon />
          <FlatGalleryIcon />
        </div>

        <div className="Right">
          <FlatGalleryIcon />
        </div>

      </div>
    )
  }
}


export default MessageTools
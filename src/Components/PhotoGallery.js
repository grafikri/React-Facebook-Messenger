import './PhotoGallery.css'
import React from 'react'
import _ from 'lodash'

class PhotoGallery extends React.Component {
  render() {

    let url = "https://fakeimg.pl/200x200/444/?text=Photo&font=lobster%22"

    let photos = [[url, url, url], [url, url, url], [url, url, url]]

    let items = photos.map((group) => (
      <div className="Gallery-Container">
        {group.map((photoUrl) => (<div className="Gallery-Item"><img src={photoUrl} /></div>))}
      </div>
    ))

    return (
      <div className="Photo-Gallery">
        {items}
      </div>
    )
  }
}

export default PhotoGallery

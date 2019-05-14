import './Header.css'

import React from 'react'


class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Left-Icons">Left Icons</div>
        <div className="Titles">
          <div className="Title">
            Title
          </div>
          <div className="Sub-Title">
            Subtitle
          </div>
        </div>
        <div className="Right-Icons">Right Icons</div>
      </div>
    )
  }
}


export default Header
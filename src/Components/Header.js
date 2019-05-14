import './Header.css'

import React from 'react'
import _ from 'lodash'


class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {


    let leftIcons = _.isArray(this.props.LeftIcons) ? this.props.LeftIcons.map((icon, index) => (<span className="Icon-Container" key={index}>{icon}</span>)) : []

    let rightIcons = _.isArray(this.props.RightIcons) ? this.props.RightIcons.map((icon, index) => (<span className="Icon-Container" key={index}>{icon}</span>)) : []

    return (
      <div className="Header">
        <div className="Left-Icons">
          {leftIcons}
        </div>
        <div className="Titles">
          <div className="Title">
            Title
          </div>
          <div className="Sub-Title">
            Subtitle
          </div>
        </div>
        <div className="Right-Icons">
          {rightIcons}
        </div>
      </div>
    )
  }
}


export default Header
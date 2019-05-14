import './Header.css'

import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'


class Header extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    let leftIcons = _.isArray(this.props.leftIcons) ? this.props.leftIcons.map((icon, index) => (<span className="Icon-Container" key={index}>{icon}</span>)) : []

    let rightIcons = _.isArray(this.props.rightIcons) ? this.props.rightIcons.map((icon, index) => (<span className="Icon-Container" key={index}>{icon}</span>)) : []

    let title = <h1 className="Big-Title">{this.props.title}</h1>

    let titleAndSubtitle = <div className="Mini-Title">
      <h2 className="Top-Title">{this.props.title}</h2>
      <h2 className="Bottom-Title">{this.props.subTitle}</h2>
    </div>

    return (
      <div className="Header">
        <div className="Left-Icons">
          {leftIcons}
        </div>
        <div className="Titles">
          {!_.isEmpty(this.props.title) && !_.isEmpty(this.props.subTitle) ? titleAndSubtitle : title}
        </div>
        <div className="Right-Icons">
          {rightIcons}
        </div>
      </div>
    )
  }
}

Header.defaultProps = {
  title: "",
  subTitle: "",
}

Header.propTypes = {
  leftIcons: PropTypes.array,
  rightIcons: PropTypes.array,
  title: PropTypes.string,
  subTitle: PropTypes.string,
}


export default Header
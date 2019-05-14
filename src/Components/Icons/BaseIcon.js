import './BaseIcon.css'
import React from 'react'
import PropTypes from 'prop-types'

class BaseIcon extends React.Component {
  render() {

    const positionTxt = this.props.xPos + "px" + " " + this.props.yPos + "px"
    let style = { backgroundPosition: positionTxt }

    return (
      <span style={style} className="Base-Icon"></span>
    )
  }
}


BaseIcon.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired
}



export default BaseIcon
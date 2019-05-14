import './TinyBaseIcon.css'
import React from 'react'
import PropTypes from 'prop-types'

class TinyBaseIcon extends React.Component {
  render() {

    const positionTxt = this.props.xPos + "px" + " " + this.props.yPos + "px"
    let style = { backgroundPosition: positionTxt }

    return (
      <span style={style} className="Tiny-Icon"></span>
    )
  }
}


TinyBaseIcon.propTypes = {
  xPos: PropTypes.number.isRequired,
  yPos: PropTypes.number.isRequired
}



export default TinyBaseIcon
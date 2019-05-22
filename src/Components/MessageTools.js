import './MessageTools.css'

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'


class MessageTools extends React.Component {
  render() {

    return (
      <div className="Message-Tools">
        <div className="Left">
          {_.isArray(this.props.leftIcons) && this.props.leftIcons.map((icon, index) => <div key={index}>{icon}</div>)}
        </div>

        <div className="Right">
          {_.isArray(this.props.rightIcons) && this.props.rightIcons.map((icon, index) => <div key={index}>{icon}</div>)}
        </div>

      </div>
    )
  }
}

MessageTools.propTypes = {
  leftIcons: PropTypes.array,
  rightIcons: PropTypes.array
}

export default MessageTools
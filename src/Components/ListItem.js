import './ListItem.css'
import React from 'react'

class ListItem extends React.Component {


  render() {
    return (
      <div className="List-Item">
        <div className="Icon">
          {this.props.icon}
        </div>
        <div className="Title">
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default ListItem
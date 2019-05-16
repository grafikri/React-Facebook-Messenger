import './CollapseItem.css'
import React from 'react'

class CollapseItem extends React.Component {

  componentDidMount() {
    console.log("collapse item: ", this.props)
  }

  render() {
    return (
      <div className="Collapse-Item">
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

export default CollapseItem
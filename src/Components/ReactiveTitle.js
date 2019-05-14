import React from 'react'
import './ReactiveTitle.css'
import { ArrowIcon } from '../Components/Icons'

class ReactiveTitle extends React.Component {

  constructor(props) {
    super(props)

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)

    this.state = {
      hover: false
    }
  }

  handleMouseEnter() {
    this.setState({ hover: true })
  }

  handleMouseLeave() {
    this.setState({ hover: false })
  }

  render() {

    let style = {}
    style.background = this.state.hover ? "#F5F6F7" : "none"

    return (
      <div style={style} className="Reactive-Title" onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
        <div className="Title">
          <h4>Seçenekler</h4>
        </div>
        <div className="Icon">
          <ArrowIcon />
        </div>
      </div>
    )
  }
}

export default ReactiveTitle
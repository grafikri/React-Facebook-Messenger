/**
 * 
 * Part of this code has been taken from https://codepen.io/Libor_G/pen/eyzwOx
 * 
 */
import './ResizableTextarea.css'
import React from 'react'
import PropTypes from 'prop-types'

class ResizableTextarea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      rows: 1,
      minRows: 1,
      maxRows: 5,
    }


    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
    this.handleEnterKeyTriggered = this.handleEnterKeyTriggered.bind(this)
  }

  handleChange = (event) => {
    const textareaLineHeight = 24
    const { minRows, maxRows } = this.state

    const previousRows = event.target.rows
    event.target.rows = minRows // reset number of rows in textarea 

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight)

    if (currentRows === previousRows) {
      event.target.rows = currentRows
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows
      event.target.scrollTop = event.target.scrollHeight
    }

    this.setState({
      value: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    })
  }

  handleOnKeyDown(event) {
    if (event.keyCode == 13 && event.shiftKey == false) {
      event.preventDefault();
      if (this.state.value.trim() == '') { return }

      this.handleEnterKeyTriggered()
    }
  }

  handleEnterKeyTriggered() {
    this.props.handleSubmit(this.state.value.trim())
    this.setState({ value: '' })
  }

  render() {
    return (
      <textarea
        rows={this.state.rows}
        value={this.state.value}
        placeholder={'Bir mesaj yazın...'}
        className={'Resizable-Textarea'}
        onChange={this.handleChange}
        onKeyDown={this.handleOnKeyDown}
      />
    )
  }
}

ResizableTextarea.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}


export default ResizableTextarea
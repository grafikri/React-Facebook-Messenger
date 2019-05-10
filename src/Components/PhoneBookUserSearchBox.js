import React from 'react'
import PropTypes from 'prop-types'

import './PhoneBookUserSearchBox.css'

class PhoneBookUserSearchBox extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            focusActive: false
        }

        this.handleOnBlur = this.handleOnBlur.bind(this)
        this.handleOnFocus = this.handleOnFocus.bind(this)

    }

    handleOnFocus () {
        this.props.onFocus()
        this.setState({ focusActive: true })
    }
    
    handleOnBlur () {
        this.props.onBlur()
        this.setState({ focusActive: false })
    }

    render () {


        let style = {}
        
        style.textAlign = this.state.focusActive ? "left" : "center"

        return (
            <div className="PhoneBookUserSearchBox">
                <input onBlur={this.handleOnBlur} onFocus={this.handleOnFocus}style={style} type="text" placeholder="Search..." />
            </div>
        )
    }
}

PhoneBookUserSearchBox.propTypes = {
    onFocus: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired
}

export default PhoneBookUserSearchBox
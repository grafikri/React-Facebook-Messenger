import React from 'react'

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
        this.setState({ focusActive: true })
    }
    
    handleOnBlur () {
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

export default PhoneBookUserSearchBox
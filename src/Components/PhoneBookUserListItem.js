import React from 'react'
import Avatar from './Avatar'
import './PhoneBookUserListItem.css'

class PhoneBookUserListItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            bgActive: false
        }

        this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this)
        this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this)
        
    }

    handleOnMouseEnter(){
        this.setState({ bgActive: true})
    }

    handleOnMouseLeave(){
        this.setState({ bgActive: false})
    }

    render () {

        let style = {}
        style.background = this.state.bgActive ? "rgba(0, 0, 0, .05)" : "white"

        let configStyle = {}
        if(!this.state.bgActive){ configStyle.display = "none" }

        return (
            <div style={style} className="PhoneBookUserListItem" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <div className="Avatar-Container">
                    <Avatar width="32px" type="circle" url={this.props.profile_photo} />
                </div>
                <div className="Content">
                    {this.props.full_name}
                </div>
            </div>
            
        )
    }
}

export default PhoneBookUserListItem
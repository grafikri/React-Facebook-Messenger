import React from 'react'
import Avatar from './Avatar'
import PropTypes from 'prop-types'
import './TinyChatUserListItem.css'


class TinyChatUserListItem extends React.Component {

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
            <div style={style} className="Tiny-Chat-User-List-Item" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <div className="Avatar-Container">
                    <Avatar type="circle" url={this.props.photo} />

                    <div style={configStyle} className="Tooltip-Container">
                        <div className="Tooltip">
                            {this.props.title}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


TinyChatUserListItem.propTypes = {
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired
}



export default TinyChatUserListItem
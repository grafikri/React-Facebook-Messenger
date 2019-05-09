import React from 'react'
import Avatar from './Avatar'
import './LargeChatUserListItem.css'
import { tsImportEqualsDeclaration } from '@babel/types';

class LargeChatUserListItem extends React.Component {

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
        

        return (
            <div style={style} className="Large-Chat-User-List-Item" onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                <div className="Avatar-Container">
                    <Avatar type="circle" url={this.props.profile_photo} />
                </div>
                <div className="Content">
                    <div className="TopContent">
                        <div className="Nickname">
                            {this.props.full_name}
                        </div>
                        <div className="Date">
                        {this.props.date}
                        </div>
                    </div>
                    <div className="BottomContent">
                        <div className="Desc">
                        {this.props.desc}
                        </div>
                        <div className="Config">
                            ...
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default LargeChatUserListItem
import React from 'react'
import Avatar from './Avatar'
import './LargeChatUserListItem.css'

class LargeChatUserListItem extends React.Component {

    render () {
        return (
            <div className="User-Info">
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
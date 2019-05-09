import React from 'react'

import './LargeChatUserList.css'



class LargeChatUserList extends React.Component {
    render () {

        return (
            <div>
                {this.props.children}
            </div>
            
        )
    }
}

export default LargeChatUserList
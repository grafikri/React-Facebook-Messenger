import React from 'react'

import './TinyChatUserList.css'



class TinyChatUserList extends React.Component {
    render () {

        return (
            <div>
                {this.props.children}
            </div>
            
        )
    }
}

export default TinyChatUserList
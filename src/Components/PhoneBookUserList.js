import React from 'react'

 // import './PhoneBookUserList.css'



class PhoneBookUserList extends React.Component {
    render () {

        return (
            <div>
                {this.props.children}
            </div>
            
        )
    }
}

export default PhoneBookUserList
import React from 'react'
import LargeChatUserList from './../Components/LargeChatUserList'
import LargeChatUserListItem from './../Components/LargeChatUserListItem'

import PhoneBookUserList from './../Components/PhoneBookUserList'
import PhoneBookUserListItem from './../Components/PhoneBookUserListItem'
import PhoneBookUserSeachBox from './../Components/PhoneBookUserSearchBox'

import { connect } from 'react-redux'


class LeftSection extends React.Component {
    constructor(props){
        super(props)
        
        this.handleOnFocus = this.handleOnFocus.bind(this)
        this.handleOnBlur = this.handleOnBlur.bind(this)

        this.state = {
            searchActive: false,
        }
    }

    handleOnFocus(){
        this.setState({ searchActive: true })
    }

    handleOnBlur(){
        this.setState({ searchActive: false })
    }

    componentDidMount() {
        
        console.log("componentDidMount: ", this.props)
    }
    
    render () {

        return (
            <div>
                <PhoneBookUserSeachBox onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />
                <div style={{ display: this.state.searchActive ? "block" : "none" }}>
                    <PhoneBookUserList>
                        { this.props.users.map((user) => <PhoneBookUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} />) }
                    </PhoneBookUserList>
                </div>
                <div style={{ display: this.state.searchActive ? "none" : "block" }}>
                    <LargeChatUserList>
                        { this.props.users.map((user) => <LargeChatUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} date={user.date} desc={user.desc} />) }
                    </LargeChatUserList>
                </div>
            </div>
        )
    }
}





const mapStateToProps = state => {
    return { searchActive: state.openClose.phoneBookUserSearchActive, users: state.chatUsers.users } 
}



export default connect(mapStateToProps)(LeftSection)
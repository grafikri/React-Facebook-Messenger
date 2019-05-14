import React from 'react'
import './LeftSection.css'
import { WriteIcon, GearIcon } from '../Components/Icons'
import LargeChatUserList from './../Components/LargeChatUserList'
import LargeChatUserListItem from './../Components/LargeChatUserListItem'

import TinyChatUserList from './../Components/TinyChatUserList'
import TinyChatUserListItem from './../Components/TinyChatUserListItem'

import PhoneBookUserList from './../Components/PhoneBookUserList'
import PhoneBookUserListItem from './../Components/PhoneBookUserListItem'
import PhoneBookUserSeachBox from './../Components/PhoneBookUserSearchBox'
import Header from './../Components/Header'


import { connect } from 'react-redux'


class LeftSection extends React.Component {
  constructor(props) {
    super(props)

    this.handleOnFocus = this.handleOnFocus.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)

    this.state = {
      searchActive: false,
    }
  }

  handleOnFocus() {
    this.setState({ searchActive: true })
  }

  handleOnBlur() {
    this.setState({ searchActive: false })
  }

  componentDidMount() {

  }

  render() {

    return (
      <div className="Left-Section">

        <div className="Left-Section-Header">
          <Header title="Messenger" leftIcons={[<GearIcon />]} rightIcons={[<WriteIcon />]} />
        </div>

        <div className="Search-Input">
          <PhoneBookUserSeachBox onFocus={this.handleOnFocus} onBlur={this.handleOnBlur} />
        </div>

        <div className="Tiny-User-List">
          <TinyChatUserList>
            {this.props.users.map((user) => <TinyChatUserListItem key={user.id} title={user.name} photo={user.profile_photo} />)}
          </TinyChatUserList>
        </div>

        <div className="Phone-Book-User" style={{ display: this.state.searchActive ? "block" : "none" }}>
          <PhoneBookUserList>
            {this.props.users.map((user) => <PhoneBookUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} />)}
          </PhoneBookUserList>
        </div>
        <div className="Large-Chat-User" style={{ display: this.state.searchActive ? "none" : "block" }}>
          <LargeChatUserList>
            {this.props.users.map((user) => <LargeChatUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} date={user.date} desc={user.desc} />)}
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
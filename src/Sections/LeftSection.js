import React from "react"
import "./LeftSection.css"
import { fetchConversation } from "../Redux/actions"
import { WriteIcon, GearIcon } from "../Components/Icons"
import LargeChatUserList from "./../Components/LargeChatUserList"
import LargeChatUserListItem from "./../Components/LargeChatUserListItem"

import TinyChatUserList from "./../Components/TinyChatUserList"
import TinyChatUserListItem from "./../Components/TinyChatUserListItem"

import PhoneBookUserList from "./../Components/PhoneBookUserList"
import PhoneBookUserListItem from "./../Components/PhoneBookUserListItem"
import PhoneBookUserSeachBox from "./../Components/PhoneBookUserSearchBox"
import Header from "./../Components/Header"

import { connect } from "react-redux"

class LeftSection extends React.Component {
	constructor(props) {
		super(props)

		this.handleOnFocus = this.handleOnFocus.bind(this)
		this.handleOnBlur = this.handleOnBlur.bind(this)

		this.state = {
			searchActive: false,
			userGroupHeight: 0
		}
	}

	handleOnFocus() {
		this.setState({ searchActive: true })
	}

	handleOnBlur() {
		this.setState({ searchActive: false })
	}

	updateHeightOfUserGroup() {
		let headerHeight = 51
		this.setState({ userGroupHeight: window.innerHeight - headerHeight })
	}

	componentDidMount() {
		window.addEventListener(
			"resize",
			function() {
				this.updateHeightOfUserGroup()
			}.bind(this)
		)

		this.updateHeightOfUserGroup()
	}

	render() {
		return (
			<div className="Left-Section">
				<div className="Left-Section-Tablet-Header">
					<WriteIcon />
				</div>

				<div className="Left-Section-Desktop-Header">
					<Header
						title="Messenger"
						leftIcons={[<GearIcon />]}
						rightIcons={[<WriteIcon />]}
					/>
				</div>

				<div
					style={{ height: this.state.userGroupHeight + "px" }}
					className="Left-Section-Group"
				>
					<div className="Search-Input">
						<PhoneBookUserSeachBox
							onFocus={this.handleOnFocus}
							onBlur={this.handleOnBlur}
						/>
					</div>

					<div className="Tiny-User-List">
						<TinyChatUserList>
							{this.props.users.map(user => (
								<TinyChatUserListItem
									key={user.id}
									title={user.name}
									photo={user.profile_photo}
								/>
							))}
						</TinyChatUserList>
					</div>

					<div
						className="Phone-Book-User"
						style={{ display: this.state.searchActive ? "block" : "none" }}
					>
						<PhoneBookUserList>
							{this.props.users.map(user => (
								<PhoneBookUserListItem
									key={user.id}
									profile_photo={user.profile_photo}
									full_name={user.name}
								/>
							))}
						</PhoneBookUserList>
					</div>
					<div
						className="Large-Chat-User"
						style={{ display: this.state.searchActive ? "none" : "block" }}
					>
						<LargeChatUserList>
							{this.props.users.map(user => (
								<LargeChatUserListItem
									handleOnClick={id => {
										let user = this.props.users.filter(user => user.id == id)
										this.props.fetchConversation(user[0].conversation_id)
									}}
									key={user.id}
									id={user.id}
									profile_photo={user.profile_photo}
									full_name={user.name}
									date={user.date}
									desc={user.desc}
								/>
							))}
						</LargeChatUserList>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	searchActive: state.openClose.phoneBookUserSearchActive,
	users: state.users
})

const mapDispatchToProps = dispatch => ({
	fetchConversation: conversation_id =>
		dispatch(fetchConversation(conversation_id))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LeftSection)

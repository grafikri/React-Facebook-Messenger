import React from "react"
import Avatar from "./Avatar"
import "./LargeChatUserListItem.sass"
import PropTypes from "prop-types"

class LargeChatUserListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			bgActive: false
		}
	}

	render() {
		let style = {}
		style.background = this.state.bgActive ? "rgba(0, 0, 0, .05)" : "white"

		let configStyle = {}
		if (!this.state.bgActive) {
			configStyle.display = "none"
		}

		return (
			<div
				style={style}
				className="Large-Chat-User-List-Item"
				onMouseEnter={() => this.setState({ bgActive: true })}
				onMouseLeave={() => this.setState({ bgActive: false })}
				onClick={() => this.props.handleOnClick(this.props.id)}
			>
				<div className="Avatar-Container">
					<Avatar width="48px" type="circle" url={this.props.profile_photo} />
				</div>
				<div className="Content">
					<div className="TopContent">
						<div className="Nickname">{this.props.full_name}</div>
						<div className="Date">{this.props.date}</div>
					</div>
					<div className="BottomContent">
						<div className="Desc">{this.props.desc}</div>
						<div style={configStyle} className="Config">
							...
						</div>
					</div>
				</div>
			</div>
		)
	}
}

LargeChatUserListItem.propTypes = {
	handleOnClick: PropTypes.func.isRequired
}

export default LargeChatUserListItem

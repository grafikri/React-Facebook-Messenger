import "./MessageListItemReceiver.sass"

import PropTypes from "prop-types"
import React from "react"
import { Avatar } from "./"

class MessageListItemReceiver extends React.Component {
	render() {
		return (
			<div className="Message-List-Item-Receiver">
				<div className="Message-Avatar">
					<Avatar url={this.props.profile_photo} width={32} type="circle" />
				</div>
				<div className="Content">
					{this.props.photo != "" && (
						<div className="Photo">
							<img src={this.props.photo} alt="" />
						</div>
					)}
					{this.props.text != "" && (
						<div className="Bubbles">
							<p>{this.props.text}</p>
						</div>
					)}
				</div>
			</div>
		)
	}
}

MessageListItemReceiver.defaultProps = {
	text: "",
	photo: ""
}

MessageListItemReceiver.propTypes = {
	profil_photo: PropTypes.string.isRequired,
	text: PropTypes.string,
	photo: PropTypes.string
}

export default MessageListItemReceiver

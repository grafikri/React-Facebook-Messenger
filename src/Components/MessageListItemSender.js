import "./MessageListItemSender.sass"

import React from "react"
import PropTypes from "prop-types"

class MessageListItemSender extends React.Component {
	render() {
		const url = "https://fakeimg.pl/2000x2000/?text=Photo&font=lobster%22"

		return (
			<div className="Message-List-Item-Sender">
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
		)
	}
}

MessageListItemSender.defaultProps = {
	text: "",
	photo: ""
}

MessageListItemSender.propTypes = {
	text: PropTypes.string,
	photo: PropTypes.string
}

export default MessageListItemSender

import "./MessageListItemSender.sass"

import React from "react"

class MessageListItemSender extends React.Component {
	render() {
		const url = "https://fakeimg.pl/2000x2000/?text=Photo&font=lobster%22"

		return (
			<div className="Message-List-Item-Sender">
				<div className="Bubbles">Bubbles</div>
				<div className="Photo">
					<img src={url} alt="" />
				</div>
			</div>
		)
	}
}

export default MessageListItemSender

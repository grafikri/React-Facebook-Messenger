import "./MessageList.sass"
import React from "react"

class MessageList extends React.Component {
	render() {
		return <div className="Message-List">{this.props.children}</div>
	}
}

export default MessageList

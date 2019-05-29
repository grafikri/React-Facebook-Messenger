import "./Home.sass"
import { connect } from "react-redux"
import React from "react"
import LeftSection from "./../Sections/LeftSection"
import MessageSection from "../Sections/MessageSection"

class Home extends React.Component {
	render() {
		return (
			<div className="Chat-Panel">
				<div className="Left-Panel">
					<LeftSection />
				</div>
				<div className="Right-Panel">
					{this.props.conversation_id == null ? (
						"Empty Screen"
					) : (
						<MessageSection />
					)}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	conversation_id: state.conversationStatus.active_conversation_id
})

export default connect(mapStateToProps)(Home)

import "./Home.sass"

import React from "react"
import LeftSection from "./../Sections/LeftSection"
import RightSection from "./../Sections/RightSection"

import { MessageListItemSender } from "../Components"

class Home extends React.Component {
	render() {
		return (
			<div className="Chat-Panel">
				<div className="Left-Panel">
					<LeftSection />
				</div>
				<div className="Right-Panel">
					{/* <RightSection /> */}
					<MessageListItemSender />
					<MessageListItemSender />
					<MessageListItemSender />
				</div>
			</div>
		)
	}
}

export default Home

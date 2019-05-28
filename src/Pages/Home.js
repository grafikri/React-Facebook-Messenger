import "./Home.sass"

import React from "react"
import LeftSection from "./../Sections/LeftSection"
import RightSection from "./../Sections/RightSection"

import { MessageListItemSender, MessageListItemReceiver } from "../Components"

class Home extends React.Component {
	render() {
		const url = "https://fakeimg.pl/2000x2000/?text=Photo&font=lobster%22"
		const text =
			"dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı"

		return (
			<div className="Chat-Panel">
				<div className="Left-Panel">
					<LeftSection />
				</div>
				<div className="Right-Panel">
					<MessageListItemSender photo={url} text={text} />
					{/* <RightSection /> */}
					<MessageListItemReceiver
						profile_photo={url}
						text={text}
						photo={url}
					/>
				</div>
			</div>
		)
	}
}

export default Home

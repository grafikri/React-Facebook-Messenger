import React from "react"
import { connect } from "react-redux"
import { addNewMessage } from "../Redux/actions"
import "./RightSection.css"
import {
	Header,
	Collapse,
	ListItem,
	PhotoGallery,
	MessageTools,
	ResizableTextarea,
	MessageListItemSender,
	MessageListItemReceiver,
	MessageList
} from "./../Components"

import {
	GearIcon,
	InfoIcon,
	WriteIcon,
	PlusIcon,
	FlatGalleryIcon,
	FlatStickerIcon,
	FlatGifIcon,
	FlatSmileIcon,
	FlatMicIcon,
	FlatGameIcon,
	FlatCameraIcon,
	FlatLikeIcon
} from "../Components/Icons"

class RightSection extends React.Component {
	constructor(props) {
		super(props)

		this.handleSubmit = this.handleSubmit.bind(this)
		this.state = {
			bodyHeight: 0
		}
	}

	updateHeight() {
		let headerHeight = 51
		this.setState({ bodyHeight: window.innerHeight - headerHeight })
	}

	handleSubmit(value) {
		this.props.addNewMessage(value)
	}

	componentDidMount() {
		console.log("did: ", this)

		window.addEventListener(
			"resize",
			function() {
				this.updateHeight()
			}.bind(this)
		)

		this.updateHeight()
	}

	render() {
		const url = "https://fakeimg.pl/2000x2000/?text=Photo&font=lobster%22"
		const text =
			"dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı"

		return (
			<div className="Right-Section">
				<div className="Header-Container">
					<Header
						title="Tony Stark"
						subTitle="3 dakika önce aktifti"
						rightIcons={[<GearIcon />, <GearIcon />, <GearIcon />]}
					/>
				</div>

				<div className="Content-Area">
					<div className="Chat-Area">
						<div className="Messages">
							<MessageList>
								{this.props.messages.map((message, index) =>
									message.user_id == this.props.auth.id ? (
										<MessageListItemSender key={index} text={message.text} />
									) : (
										<MessageListItemReceiver
											key={index}
											profile_photo={this.props.user.profile_photo}
											text={message.text}
										/>
									)
								)}
							</MessageList>
						</div>
						<div className="Tools">
							<ResizableTextarea handleSubmit={this.handleSubmit} />
							<MessageTools
								leftIcons={[
									<FlatGalleryIcon />,
									<FlatStickerIcon />,
									<FlatGifIcon />,
									<FlatSmileIcon />,
									<FlatMicIcon />,
									<FlatGameIcon />,
									<FlatCameraIcon />
								]}
								rightIcons={[<FlatLikeIcon />]}
							/>
						</div>
					</div>
					<div
						style={{ height: this.state.bodyHeight }}
						className="User-Information-Area"
					>
						<div className="User-Config">
							<Collapse title="Seçenekler" open={true}>
								<ListItem icon={<GearIcon />} title="Konusmada Ara" />
								<ListItem icon={<InfoIcon />} title="Takma adları düzenle" />
								<ListItem icon={<WriteIcon />} title="Rengi değiştir" />
								<ListItem
									icon={<PlusIcon />}
									title="İfade simgesini değiştir"
								/>
							</Collapse>
						</div>

						<div className="User-Gallery">
							<Collapse title="Galeri">
								<PhotoGallery />
							</Collapse>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	messages: state.messages.con_1,
	auth: state.auth,
	user: state.user
})

const mapDispatchToProps = dispatch => ({
	addNewMessage: text => dispatch(addNewMessage("con_1", text))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RightSection)

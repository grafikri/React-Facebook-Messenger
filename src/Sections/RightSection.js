import React from "react"
import "./RightSection.css"
import {
	Header,
	Collapse,
	ListItem,
	PhotoGallery,
	MessageTools,
	ResizableTextarea
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
		this.state = {
			bodyHeight: 0
		}
	}

	updateHeight() {
		let headerHeight = 51
		this.setState({ bodyHeight: window.innerHeight - headerHeight })
	}

	handleSubmit(value) {
		console.log("val: ", value)
	}

	componentDidMount() {
		window.addEventListener(
			"resize",
			function() {
				this.updateHeight()
			}.bind(this)
		)

		this.updateHeight()
	}

	render() {
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
						<div className="Messages">Messages</div>
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

				{/* <PhotoGallery /> */}
			</div>
		)
	}
}

export default RightSection

import React from "react"
import "./Collapse.css"
import { ArrowIcon } from "./Icons"

class Collapse extends React.Component {
	constructor(props) {
		super(props)

		this.handleOnclick = this.handleOnclick.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseLeave = this.handleMouseLeave.bind(this)

		this.state = {
			hover: false,
			open: this.props.open
		}
	}

	handleMouseEnter() {
		this.setState({ hover: true })
	}

	handleMouseLeave() {
		this.setState({ hover: false })
	}

	handleOnclick() {
		this.setState({ open: !this.state.open })
	}

	componentDidMount() {}

	render() {
		let style = {}
		style.background = this.state.hover ? "#F5F6F7" : "none"

		let rotateStyle = {}
		rotateStyle.transform = !this.state.open ? "rotate(90deg)" : "none"
		rotateStyle.display = !this.state.open ? "inline-block" : "inherit"

		let ItemsHideStyle = {}
		ItemsHideStyle.display = this.state.open ? "block" : "none"

		return (
			<div className="Collapse">
				<div
					style={style}
					className="Collapse-Header"
					onMouseLeave={this.handleMouseLeave}
					onMouseEnter={this.handleMouseEnter}
					onClick={this.handleOnclick}
				>
					<div className="Title">
						<h4>{this.props.title}</h4>
					</div>
					<div className="Icon">
						<span style={rotateStyle}>
							<ArrowIcon />
						</span>
					</div>
				</div>

				<div style={ItemsHideStyle} className="Collapse-Body">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Collapse

import React from 'react'
import './Avatar.css'

class Avatar extends React.Component {
    render() {
        let style = {}

        if(this.props.width !== undefined){ 
            style.width = this.props.width
        }

        if(this.props.height !== undefined){ 
            style.height = this.props.height
        }

        if(this.props.type == "circle") {
            style.borderRadius = "50%";
        }
        
        return (
            <div className="Avatar">
                <img alt="" style={style} src={this.props.url} />
            </div>
        )
    }
}

export default Avatar
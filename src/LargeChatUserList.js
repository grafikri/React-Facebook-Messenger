import React from 'react'
import Avatar from './Avatar'

import './LargeChatUserList.css'



class LargeChatUserList extends React.Component {
    constructor(props){
        super(props)

        const url = "https://scontent.fbtz1-4.fna.fbcdn.net/v/t1.0-1/p50x50/50407326_10155788003077096_2720396654237712384_n.jpg?_nc_cat=102&_nc_ht=scontent.fbtz1-4.fna&oh=1694c63353dbcc17838d112453b24b96&oe=5D62ACFF"

        this.state = {
            users:[
                {
                    name: "Merve",
                    profile_photo: url,
                    date: "01.01.01",
                    desc: "Güzel bir mesaj metni"
                },
                {
                    name: "Merve",
                    profile_photo: url,
                    date: "01.01.01",
                    desc: "Güzel bir mesaj metni"
                }
            ]
        }
    }

    render () {

        

        return (
            <div className="Large-Chat-Users">
                
                <div className="User-Info">
                            <div className="Avatar-Container">
                                <Avatar type="circle" url="1" />
                            </div>
                            <div className="Content">
                                <div className="TopContent">
                                    <div className="Nickname">
                                        Merve
                                    </div>
                                    <div className="Date">
                                        01.01.01
                                    </div>
                                </div>
                                <div className="BottomContent">
                                    <div className="Desc">
                                        Desc
                                    </div>
                                    <div className="Config">
                                        Config
                                    </div>
                                </div>
                            </div>
                        </div>
                        

            </div>
            
        )
    }
}

export default LargeChatUserList
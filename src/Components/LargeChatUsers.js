import React from 'react'
import Avatar from './Avatar'

import './LargeChatUsers.css'



class LargeChatUsers extends React.Component {
    render () {

        let url = "https://scontent.fbtz1-4.fna.fbcdn.net/v/t1.0-1/p50x50/50407326_10155788003077096_2720396654237712384_n.jpg?_nc_cat=102&_nc_ht=scontent.fbtz1-4.fna&oh=1694c63353dbcc17838d112453b24b96&oe=5D62ACFF"

        return (
            <div className="Large-Chat-Users">
                <ul>
                    <li>
                        <div className="User-Info">
                            <div className="Avatar-Container">
                                <Avatar type="circle" url={url} />
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
                    </li>
                </ul>
            </div>
        )
    }
}

export default LargeChatUsers
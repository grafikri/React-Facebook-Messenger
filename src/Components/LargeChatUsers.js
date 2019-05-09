import React from 'react'

import './LargeChatUsers.css'

class LargeChatUsers extends React.Component{
    render () {
        return (
            <div className="Large-Chat-Users">
                <ul>
                    <li>
                        <div className="User-Info">
                            <div className="Avatar">
                                Avatar
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
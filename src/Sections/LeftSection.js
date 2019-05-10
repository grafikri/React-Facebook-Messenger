import React from 'react'
import LargeChatUserList from './../Components/LargeChatUserList'
import LargeChatUserListItem from './../Components/LargeChatUserListItem'

import PhoneBookUserList from './../Components/PhoneBookUserList'
import PhoneBookUserListItem from './../Components/PhoneBookUserListItem'
import PhoneBookUserSeachBox from './../Components/PhoneBookUserSearchBox'

import { connect } from 'react-redux'


class LeftSection extends React.Component {
    constructor(props){
        super(props)

        const url = "https://scontent.fbtz1-9.fna.fbcdn.net/v/t1.0-1/p50x50/20294440_1525787717477862_8224313811065746462_n.png?_nc_cat=108&_nc_ht=scontent.fbtz1-9.fna&oh=6750520514c008c9b1e22934108e6e2f&oe=5D5D82DD"

        this.state = {
            searchActive: false,
            users:[
                {
                    id: "1",
                    name: "Merve",
                    profile_photo: url,
                    date: "01.01.01",
                    desc: "Güzel bir mesaj metni"
                },
                {
                    id: "2",
                    name: "Merve",
                    profile_photo: url,
                    date: "02.02.02",
                    desc: "Harika bir Dünya"
                }
            ]
        }
    }


    componentDidMount() {
        console.log("merhaba: ", this.props)
    }
    
    render () {

        let largeUsersItem = this.state.users.map((user) => <LargeChatUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} date={user.date} desc={user.desc} />)

        let phoneBookUsersItem = this.state.users.map((user) => <PhoneBookUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} />)

        
        

        return (

            <div>
                <PhoneBookUserSeachBox />

                <div style={{ display: this.state.searchActive ? "block" : "none" }}>
                    <PhoneBookUserList>
                        {phoneBookUsersItem}
                    </PhoneBookUserList>
                </div>
                <div style={{ display: this.state.searchActive ? "none" : "block" }}>
                    <LargeChatUserList>
                        {largeUsersItem}
                    </LargeChatUserList>
                </div>
                
            </div>
        )
    }
}




const mapStateToProps = state => {

    console.log("local state: ", state)
    return state
}



export default connect(mapStateToProps)(LeftSection)
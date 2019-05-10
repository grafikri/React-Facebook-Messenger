import React from 'react'
import LargeChatUserList from './../Components/LargeChatUserList'
import LargeChatUserListItem from './../Components/LargeChatUserListItem'
import PhoneBookUserSeachBox from './../Components/PhoneBookUserSearchBox'


class LeftSection extends React.Component {
    constructor(props){
        super(props)

        const url = "https://scontent.fbtz1-7.fna.fbcdn.net/v/t1.0-1/p50x50/12009718_10206742983546542_3561135144944328858_n.jpg?_nc_cat=104&_nc_ht=scontent.fbtz1-7.fna&oh=c1223a84fe0a6be2a7ddb911e422b9b6&oe=5D5BC97D"

        this.state = {
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
    render () {

        let Items = this.state.users.map((user) => <LargeChatUserListItem key={user.id} profile_photo={user.profile_photo} full_name={user.name} date={user.date} desc={user.desc} />)

        return (

            <div>
                <PhoneBookUserSeachBox />
                <LargeChatUserList>
                    {Items}
                </LargeChatUserList>
            </div>
        )
    }
}

export default LeftSection
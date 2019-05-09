import React from 'react'
import LargeChatUserList from './../Components/LargeChatUserList'
import LargeChatUserListItem from './../Components/LargeChatUserListItem'


class LeftSection extends React.Component {
    constructor(props){
        super(props)

        const url = "https://scontent.fbtz1-4.fna.fbcdn.net/v/t1.0-1/p50x50/50407326_10155788003077096_2720396654237712384_n.jpg?_nc_cat=102&_nc_ht=scontent.fbtz1-4.fna&oh=1694c63353dbcc17838d112453b24b96&oe=5D62ACFF"

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
                <LargeChatUserList>
                    {Items}
                </LargeChatUserList>
            </div>
        )
    }
}

export default LeftSection
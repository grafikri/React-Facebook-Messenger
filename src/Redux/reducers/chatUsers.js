

const url = "https://scontent.fbtz1-9.fna.fbcdn.net/v/t1.0-1/p50x50/20294440_1525787717477862_8224313811065746462_n.png?_nc_cat=108&_nc_ht=scontent.fbtz1-9.fna&oh=6750520514c008c9b1e22934108e6e2f&oe=5D5D82DD"

const initialState = {
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
    },
    {
      id: "3",
      name: "Merve",
      profile_photo: url,
      date: "02.02.02",
      desc: "Harika bir Dünya"
  }
  ]
}

export default function(state = initialState, action) {
  return state
}
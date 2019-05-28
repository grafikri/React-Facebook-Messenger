const url =
	"https://scontent.fbtz1-9.fna.fbcdn.net/v/t1.0-1/p50x50/20294440_1525787717477862_8224313811065746462_n.png?_nc_cat=108&_nc_ht=scontent.fbtz1-9.fna&oh=6750520514c008c9b1e22934108e6e2f&oe=5D5D82DD"

const initialState = {
	users: [
		{
			id: "1",
			name: "Tony Stark",
			profile_photo:
				"https://fakeimg.pl/200x200/444/?text=Photo&font=lobster%22",
			date: "01.01.01",
			desc: "Message"
		},
		{
			id: "2",
			name: "Hulk",
			profile_photo:
				"https://fakeimg.pl/200x200/444/?text=Photo&font=lobster%22",
			date: "02.02.02",
			desc: "Message"
		}
	]
}

export default function(state = initialState, action) {
	return state
}

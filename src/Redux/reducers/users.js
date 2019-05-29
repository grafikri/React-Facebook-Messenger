const initialState = [
	{
		id: "2222",
		conversation_id: "con_1",
		name: "Hulk",
		profile_photo: "https://fakeimg.pl/200x200/444/?text=Photo&font=lobster%22",
		date: "02.02.02",
		last_online: "3 minutes ago",
		desc: "Hi"
	},
	{
		id: "3333",
		name: "Tony Stark",
		conversation_id: "con_2",
		profile_photo: "https://fakeimg.pl/200x200/444/?text=Photo&font=lobster%22",
		date: "01.01.01",
		last_online: "1 hour ago",
		desc: "Hello"
	}
]

export default function(state = initialState, action) {
	return state
}

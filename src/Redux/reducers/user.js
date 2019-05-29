import { UPDATE_USER } from "../actionsTypes"

const initialState = {
	id: "2222",
	name: "Hulk",
	profile_photo: "https://fakeimg.pl/200x200/?text=Photo&font=lobster%22"
}

const user = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return action.user
		default:
			return state
	}
}

export default user

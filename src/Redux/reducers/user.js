import { UPDATE_USER } from "../actionsTypes"

const initialState = {}

const user = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return action.user
		default:
			return state
	}
}

export default user

import { FETCH_CONVERSATION } from "../actionsTypes"

const initialStatus = {
	active_conversation_id: "con_1"
}

export default (state = initialStatus, action) => {
	switch (action.type) {
		case FETCH_CONVERSATION:
			return { active_conversation_id: action.id }
		default:
			return state
	}
}

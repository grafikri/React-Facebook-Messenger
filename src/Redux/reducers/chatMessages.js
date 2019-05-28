import { ADD_NEW_MESSAGE } from "../actionsTypes"

const initialState = {
	id1: [
		{
			text: "id1 birinci mesaj",
			date: "dün"
		},
		{
			text: "id1 ikinci mesaj",
			date: "dün"
		}
	]
}

const chatMessages = (state = initialState, action) => {
	switch (action) {
		case ADD_NEW_MESSAGE:
			return state.map(messages, user_id => {
				if (user_id == action.id) {
					messages.concat({ text: action.text, date: "Şimdi" })
				}
			})
		default:
			return state
	}
}

export default chatMessages

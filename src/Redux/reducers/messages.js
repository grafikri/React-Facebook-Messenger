import { ADD_NEW_MESSAGE } from "../actionsTypes"
import _ from "lodash"

const initialState = {
	con_1: [
		{
			text: "Merhaba",
			date: "dün",
			user_id: "2222"
		},
		{
			text: "Naber?",
			date: "dün",
			user_id: "2222"
		},
		{
			text: "İyidir senden",
			date: "dün",
			user_id: "1111"
		}
	],
	con_2: [
		{
			text: "Merhaba",
			date: "dün",
			user_id: "2222"
		}
	]
}

const messages = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW_MESSAGE:
			return {
				...state,
				[action.conversation_id]: [
					...state[action.conversation_id],
					{
						text: action.text,
						date: "Şimdi",
						user_id: "1111"
					}
				]
			}

		default:
			return state
	}
}

export default messages

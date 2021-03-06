import { ADD_NEW_MESSAGE, FETCH_CONVERSATION } from "../actionsTypes"

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
			text: "Merhaba Ben Tony",
			date: "dün",
			user_id: "3333"
		},
		{
			text: "Merhaba Bende Serhan",
			date: "dün",
			user_id: "1111"
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

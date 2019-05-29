import { TOGGLE_PHONE_USER_SEARCH, ADD_NEW_MESSAGE } from "./actionsTypes"

export const tooglePhoneUserSearch = status => ({
	type: TOGGLE_PHONE_USER_SEARCH
})

export const addNewMessage = (conversation_id, text) => ({
	type: ADD_NEW_MESSAGE,
	conversation_id: conversation_id,
	text: text
})

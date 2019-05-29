import {
	TOGGLE_PHONE_USER_SEARCH,
	ADD_NEW_MESSAGE,
	FETCH_CONVERSATION,
	UPDATE_USER
} from "./actionsTypes"

export const tooglePhoneUserSearch = status => ({
	type: TOGGLE_PHONE_USER_SEARCH
})

export const addNewMessage = (conversation_id, text) => ({
	type: ADD_NEW_MESSAGE,
	conversation_id: conversation_id,
	text: text
})

export const fetchConversation = conversation_id => ({
	type: FETCH_CONVERSATION,
	id: conversation_id
})

export const updateUser = user => ({
	type: UPDATE_USER,
	user: user
})

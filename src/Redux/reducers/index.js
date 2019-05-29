import { combineReducers } from "redux"

import openClose from "./openClose"
import users from "./users"
import messages from "./messages"
import auth from "./auth"
import user from "./user"
import conversationStatus from "./conversationStatus"

export default combineReducers({
	openClose,
	users,
	messages,
	auth,
	user,
	conversationStatus
})

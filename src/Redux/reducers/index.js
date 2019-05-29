import { combineReducers } from "redux"

import openClose from "./openClose"
import chatUsers from "./chatUsers"
import messages from "./messages"
import auth from "./auth"
import user from "./user"

export default combineReducers({ openClose, chatUsers, messages, auth, user })

import { combineReducers } from 'redux'

import openClose from './openClose'
import chatUsers from './chatUsers'


export default combineReducers({ openClose, chatUsers })
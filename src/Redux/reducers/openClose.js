import { TOGGLE_PHONE_USER_SEARCH } from './../actionsTypes'

const initialState = {
    phoneBookUserSearchActive: false
}

export default function(state = initialState, action){
    switch(action.type) {
        case TOGGLE_PHONE_USER_SEARCH: {
            return {
                ...state, phoneBookUserSearchActive: !state.phoneBookUserSearchActive
            }
        }
        default:
            return state
    }
}


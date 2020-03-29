import { SEARCH, GET_WIDTH } from "./types"

const initialState = {
    search: null,
    width: window.innerWidth
}

export function appReducer(state = initialState, action) {
    if (action.type === SEARCH) {
        return {...state, search: action.payload}
    } else if(action.type === GET_WIDTH) {
        return {...state, width: action.payload}
    }

    return state
}
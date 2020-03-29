import { GET_MOVIES, GET_SHOWS, GET_PEOPLE, GET_PERSON, CLEAR_PERSON_INFO } from "./types"

const initialState = {
    movies: [],
    shows: [],
    people: [],
    person: [],
    pageCount: 0
}

export function dataReducer(state = initialState, action) {
    if (action.type === GET_MOVIES) {
        return {...state, movies: action.payload}
    } else if (action.type === GET_SHOWS) {
        return {...state, shows: action.payload.movies, pageCount:action.payload.pageCount}
    } else if (action.type === GET_PEOPLE) {
        return {...state, people: action.payload}
    } else if (action.type === GET_PERSON) {
        return {...state, person: action.payload}
    } else if (action.type === CLEAR_PERSON_INFO) {
        return {...state, person: action.payload}
    }

    return state
}
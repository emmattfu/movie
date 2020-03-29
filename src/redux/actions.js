import { SEARCH, GET_WIDTH, GET_MOVIES, GET_SHOWS, GET_PEOPLE, GET_PERSON, CLEAR_PERSON_INFO } from "./types";
import api from "../Api";

export function search(text) {
    return {type: SEARCH, payload: text}
}

export function getWidth(width) {
    return {type: GET_WIDTH, payload: width}
}


const API = api()

export function getMovies(pageInfo) {
    return async function(dispatch) {
        const data = await fetch(`${API.name}/movie/${pageInfo.type}?api_key=${API.key}&language=en-US&page=${pageInfo.page}`)
        const json = await data.json()
        const movies = json.results
        dispatch({type: GET_MOVIES, payload: movies})
    }
}

export function getShows(pageInfo) {
    return async function(dispatch) {
        const data = await fetch(`${API.name}/tv/${pageInfo.type}?api_key=${API.key}&language=en-US&page=${pageInfo.page}`)
        const json = await data.json()
        const movies = json.results
        const pageCount = json.total_pages
        dispatch({type: GET_SHOWS, payload: {movies, pageCount}})
    }
}

export function getPeople(page) {
    return async function(dispatch) {
        const data = await fetch(`${API.name}/person/popular?api_key=${API.key}&language=en-US&page=${page}`)
        const json = await data.json()
        const people = json.results
        dispatch({type: GET_PEOPLE, payload: people})
    }
}

export function getPerson(id) {
    return async function(dispatch) {
        dispatch(clearPersonInfo())
        const person = await getPersonInfo(id)
        const social = await getPersonSocial(id)
        const movies = await getPersonMovies(id)

        dispatch({type: GET_PERSON, payload: {person, social, movies}})

    }
}


async function getPersonInfo(id) {
    const data = await fetch(`${API.name}/person/${id}?api_key=${API.key}&language=en-US`)
    const person = await data.json()
    return person
}

async function getPersonSocial(id) {
    const data2 = await fetch(`${API.name}/person/${id}/external_ids?api_key=${API.key}&language=en-US`)
    const social = await data2.json()
    return social
}

async function getPersonMovies(id) {
    const data3 = await fetch(`${API.name}/person/${id}/movie_credits?api_key=${API.key}&language=en-US`)
    const movies = await data3.json()
    return movies
}

export function clearPersonInfo() {
    return {type: CLEAR_PERSON_INFO, payload: []}
}
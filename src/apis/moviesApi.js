import axios from "axios";
const API = 'https://api.themoviedb.org/3';
const LANGUAGE = '&language=en-US';

export const movieAxios = axios.create({
    baseURL: API,
    params: {
        api_key: process.env.REACT_APP_API_KEY,
    }
})

export async function fetchSelectedMovieApi(id) {
    const { data } = await movieAxios.get(`/movie/${id}?${LANGUAGE}`)
    return data
}

export async function fetchFavoriteMovieSApi(sessionId, acountId, page) {
    const { data } = await movieAxios.get(`account/${acountId}/favorite/movies`, {
        params: {
            session_id: sessionId,
            page: page
        }
    })
    return data
}

export async function fetchAddToFavoriteApi(accountId, sessionId, movieId) {
    return await movieAxios.post(`/account/${accountId}/favorite?session_id=${sessionId}`, {
        media_type: 'movie',
        media_id: movieId,
        favorite: true
    })
}

export async function fetchSearchApi(seacrchQuery, page) {
    const { data } = await movieAxios.get(`/search/movie`, {
        params: {
            query: seacrchQuery,
            page: page,
        }
    })
    return data
}

export async function fetchGenreListApi() {
    const { data } = await movieAxios.get('/genre/movie/list?')
    return data
}

export async function fetchLangaugesListApi() {
    const { data } = await movieAxios.get('/configuration/languages?')
    return data
}

export async function fetchFilterByGenerApi(genersString, sortByValue, language, page) {
    const { data } = await movieAxios.get(`/discover/movie`, {
        params: {
            page: page,
            with_genres: genersString,
            sort_by: sortByValue,
            with_original_language: language,
        }
    })

    return data
}

export async function checkFavoriteFilmApi(movieId, sessionId) {
    const { data: { favorite } } = await movieAxios.get(`/movie/${movieId}/account_states`, {
        params: {
            session_id: sessionId
        }
    })

    return favorite
}
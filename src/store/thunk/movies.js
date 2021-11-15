import {
    fetchSelectedMovieSuccess,
    fetchFavoriteMoviesSuccess,
    fetchFoundMoviesSeccess,
    fetchGenreSuccess,
    fetchFilterBuyGenerSuccess,
    fetchLanguageListSuccess,
} from '../actions';

// import {fetchFoundMoviesSeccess, fetchSelectedMovieSuccess, fetchFavoriteMoviesSuccess,fetchFilterBuyGenerSuccess,fetchGenreSuccess} from '../actions' 

import * as api from '../../apis'

export const fetchSelectedMovie = (id) => {
    return async (dispatch) => {
        try {
            const selectedMovie = await api.fetchSelectedMovieApi(id)
            dispatch(fetchSelectedMovieSuccess(selectedMovie))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchFavoriteMoives = (sessionId, accountId, page) => {
    return async (dispatch) => {
        try {
            const favoiteMovies = await api.fetchFavoriteMovieSApi(sessionId, accountId, page)
            dispatch(fetchFavoriteMoviesSuccess(favoiteMovies))

        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchFoundMovies = (searchValue, page) => {
    return async (dispatch) => {
        try {
            const foundMovies = await api.fetchSearchApi(searchValue, page)
            dispatch(fetchFoundMoviesSeccess(foundMovies))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchGenres = () => {
    return async (dispatch) => {
        try {
            const genres = await api.fetchGenreListApi()
            dispatch(fetchGenreSuccess(genres))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchFilterByGener = (sortList, sortValue, language, page) => {
    return async (dispatch) => {
        try {
            const filteredMovies = await api.fetchFilterByGenerApi(sortList, sortValue, language, page)
            dispatch(fetchFilterBuyGenerSuccess(filteredMovies))
        } catch (e) {
            console.error(e)
        }
    }
}

export const fetchLangaugeList = () => {
    return async (dispatch) => {
        try {
            const langaugeList = await api.fetchLangaugesListApi()
            dispatch(fetchLanguageListSuccess(langaugeList))
        } catch (e) {
            console.error(e)
        }
    }
}
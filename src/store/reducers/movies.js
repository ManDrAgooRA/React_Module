import { moviesActions } from '../actions'

export const initialState = {
    movies: [],
    genres: [],
    currentPage: 1,
    totalPages: 1,
    selectedMovies: null,
    isLoading: true,
    isLoadingCurrentMovie: true,
}

export function movies(state = initialState, action) {
    switch (action.type) {

        case moviesActions.FETCH_SELECTED_MOVIE_SUCCESS:
            return {
                ...state,
                selectedMovies: action.payload,
                isLoadingCurrentMovie: false
            }

        case moviesActions.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }

        case moviesActions.CLEAR_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovies: null,
                isLoadingCurrentMovie: true
            }

        case moviesActions.FETCH_FOUND_MOVIE_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                isLoading: false
            }

        case moviesActions.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genres: [...action.payload.genres]
            }

        case moviesActions.FETCH_FILTER_BY_GENER_SUCCESS:
            return {
                ...state,
                movies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                isLoading: false
            }

        case moviesActions.SET_SELECTED_FILTER:
            return {
                ...state,
                selectedGener: [...action.payload]
            }

        case moviesActions.SET_SORT_STRING:
            return {
                ...state,
                sortString: action.payload
            }

        case moviesActions.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            }

        case moviesActions.FETCH_LANGUAGE_SUCCESS:
            return {
                ...state,
                languageList: [...action.payload]
            }

        case moviesActions.SET_SELECTED_LANGUGAE:
            return {
                ...state,
                selectedLanguage: action.payload
            }

        default:
            return state
    }

}
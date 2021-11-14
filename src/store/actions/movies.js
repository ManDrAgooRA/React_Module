export const moviesActions = {
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected  movie',
    FETCH_FOUND_MOVIE_SUCCESS: '[MOVIE] Fectch found moives',
    FETCH_GENRES_SUCCESS: '[MOVIE] Fetch genres success',
    FETCH_FILTER_BY_GENER_SUCCESS: '[MOVIE] Fetch filter by gener success',
    FETCH_LANGUAGE_SUCCESS: '[MOVIE] Fetch language success',
    SET_CURRENT_PAGE: '[MOVIE] Set current step',
    SET_SELECTED_FILTER: '[MOVIE] set selected filter',
    SET_SORT_STRING: '[MOVIE] set sort string',
    SET_SEARCH_STRING: '[MOVIE] set search string',
    SET_SELECTED_LANGUGAE: '[MOVIE] set selected language',
    CLEAR_SELECTED_MOVIE: '[MOVIE] Clear seleced movie',
}

export const fetchSelectedMovieSuccess = (selectedMovie) => ({
    type: moviesActions.FETCH_SELECTED_MOVIE_SUCCESS,
    payload: selectedMovie,
})

export const setCurrentPage = (page) => ({
    type: moviesActions.SET_CURRENT_PAGE,
    payload: page
})

export const clearSeletedMovie = () => ({
    type: moviesActions.CLEAR_SELECTED_MOVIE
})

export const fetchFoundMoviesSeccess = (foundMoives) => ({
    type: moviesActions.FETCH_FOUND_MOVIE_SUCCESS,
    payload: foundMoives
})

export const fetchGenreSuccess = (genreList) => ({
    type: moviesActions.FETCH_GENRES_SUCCESS,
    payload: genreList
})

export const fetchFilterBuyGenerSuccess = (sortedMovies) => ({
    type: moviesActions.FETCH_FILTER_BY_GENER_SUCCESS,
    payload: sortedMovies
})

export const setSelecetdFilter = (selected) => ({
    type: moviesActions.SET_SELECTED_FILTER,
    payload: selected
})

export const setSortString = (string) => ({
    type: moviesActions.SET_SORT_STRING,
    payload: string
})

export const setSearchtString = (string) => ({
    type: moviesActions.SET_SEARCH_STRING,
    payload: string
})

export const fetchLanguageListSuccess = (languageList) => ({
    type: moviesActions.FETCH_LANGUAGE_SUCCESS,
    payload: languageList
})

export const setSelectedLanguage = (selectedLaguage) => ({
    type: moviesActions.SET_SELECTED_LANGUGAE,
    payload: selectedLaguage
})
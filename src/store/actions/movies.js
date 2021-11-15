export const moviesActions = {
    FETCH_SELECTED_MOVIE_SUCCESS: '[MOVIES] Fetch selected  movie',
    FETCH_FOUND_MOVIE_SUCCESS: '[MOVIE] Fectch found moives',
    FETCH_FILTER_BY_GENER_SUCCESS: '[MOVIE] Fetch filter by gener success',
    FETCH_LANGUAGE_SUCCESS: '[MOVIE] Fetch language success',
    SET_CURRENT_PAGE: '[MOVIE] Set current step',
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

export const fetchFilterBuyGenerSuccess = (sortedMovies) => ({
    type: moviesActions.FETCH_FILTER_BY_GENER_SUCCESS,
    payload: sortedMovies
})

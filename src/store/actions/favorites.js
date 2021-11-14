export const favoritesMoviesActions = {
    FETCH_FAVORITE_MOVIES_SUCCESS: '[FAVORITE] Fetch favorite movies success',
    SET_CURRENT_FAVORITES_PAGE: '[FAVORITE] set current page'
}

export const fetchFavoriteMoviesSuccess = (favoriteMovies) => ({
    type: favoritesMoviesActions.FETCH_FAVORITE_MOVIES_SUCCESS,
    payload: favoriteMovies
})

export const setCurrentFavoritePage = (currentPage) => ({
    type: favoritesMoviesActions.SET_CURRENT_FAVORITES_PAGE,
    payload: currentPage
})
import { favoritesMoviesActions } from "../actions"

const initialState = {
    favoritesMovies: [],
    isLoadingFavoritesMovies: true,
    currentPage: 1,
    page: 1,
    totalPages: 1,
}

export function favoriteMoives(state = initialState, action) {
    switch (action.type) {
        case favoritesMoviesActions.FETCH_FAVORITE_MOVIES_SUCCESS:
            return {
                ...state,
                favoritesMovies: [...action.payload.results],
                totalPages: action.payload.total_pages,
                isLoadingFavoritesMovies: false
            }

        case favoritesMoviesActions.SET_CURRENT_FAVORITES_PAGE:
            return {
                ...state,
                currentPage: action.ayload
            }

        default:
            return state
    }

}

// export function favoriteMoives(state = initialState, action) {
//     switch (action.payload) {
//         case favoritesMoviesActions.FETCH_FAVORITE_MOVIES_SUCCESS:
//             return {
//                 ...state,
//                 currentPage: 2,
//                 isLoadingFavoritesMovies: false
//             }
//         default:
//             return state
//     }
// }
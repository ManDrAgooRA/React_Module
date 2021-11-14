import { combineReducers } from 'redux'
import { movies } from './movies'
import { user } from './user'
import { theme } from './theme'
import { favoriteMoives } from './favoritesMovies'

export const rootReducer = combineReducers({
    movies,
    user,
    theme,
    favoriteMoives,
})
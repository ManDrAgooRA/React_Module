import { combineReducers } from 'redux'
import { movies } from './movies'
import { user } from './user'
import { theme } from './theme'
import { favoriteMoives } from './favoritesMovies'
import { filter } from './filter'

export const rootReducer = combineReducers({
    movies,
    user,
    theme,
    favoriteMoives,
    filter,
})
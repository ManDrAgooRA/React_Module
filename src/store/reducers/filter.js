import { filtersActions } from "../actions/filters"

export const initialState = {
    genres: [],
    selectedGener: [],
    languageList: [],
    selectedLanguage: '',
    sortString: '',
    searchString: '',
}

export function filter(state = initialState, action) {
    switch (action.type) {

        case filtersActions.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                genres: [...action.payload.genres]
            }

        case filtersActions.SET_SELECTED_FILTER:
            return {
                ...state,
                selectedGener: [...action.payload]
            }

        case filtersActions.SET_SORT_STRING:
            return {
                ...state,
                sortString: action.payload
            }

        case filtersActions.SET_SEARCH_STRING:
            return {
                ...state,
                searchString: action.payload
            }

        case filtersActions.FETCH_LANGUAGE_SUCCESS:
            return {
                ...state,
                languageList: [...action.payload]
            }

        case filtersActions.SET_SELECTED_LANGUGAE:
            return {
                ...state,
                selectedLanguage: action.payload
            }

        default:
            return state
    }

}
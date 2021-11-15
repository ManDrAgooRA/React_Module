export const filtersActions = {
    SET_SELECTED_FILTER: '[FILTER] set selected filter',
    SET_SORT_STRING: '[FILTER] set sort string',
    SET_SEARCH_STRING: '[FILTER] set search string',
    SET_SELECTED_LANGUGAE: '[FILTER] set selected language',
    FETCH_GENRES_SUCCESS: '[FILTER] Fetch genres success',
    FETCH_FILTER_BY_GENER_SUCCESS: '[FILTER] Fetch filter by gener success',
    FETCH_LANGUAGE_SUCCESS: '[FILTER] Fetch language success',
}

export const setSelecetdFilter = (selected) => ({
    type: filtersActions.SET_SELECTED_FILTER,
    payload: selected
})

export const setSortString = (string) => ({
    type: filtersActions.SET_SORT_STRING,
    payload: string
})

export const setSearchtString = (string) => ({
    type: filtersActions.SET_SEARCH_STRING,
    payload: string
})

export const setSelectedLanguage = (selectedLaguage) => ({
    type: filtersActions.SET_SELECTED_LANGUGAE,
    payload: selectedLaguage
})

export const fetchGenreSuccess = (genreList) => ({
    type: filtersActions.FETCH_GENRES_SUCCESS,
    payload: genreList,
})

export const fetchFilterBuyGenerSuccess = (sortedMovies) => ({
    type: filtersActions.FETCH_FILTER_BY_GENER_SUCCESS,
    payload: sortedMovies
})

export const fetchLanguageListSuccess = (languageList) => ({
    type: filtersActions.FETCH_LANGUAGE_SUCCESS,
    payload: languageList
})


export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}
export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function profileDataFetchDataSuccess(profileData) {
    return {
        type: 'PROFILE_FETCH_DATA_SUCCESS',
        profileData
    };
}

export function errorAfterFiveSeconds() {
    // We return a function instead of an action object
    return (dispatch) => {
        setTimeout(() => {
            // This function is able to dispatch other action creators
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

//For Profile Page
export function profileDataFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((profileData) => dispatch(profileDataFetchDataSuccess(profileData)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function searchParameter(searchTerm) {
    return {
        type: 'SEARCH_MOVIE',
        searchTerm
    };
}

export function sortAsPerRatingYear(sortParam) {
    return {
        type: 'SORT_RATING_AND_YEAR',
        sortParam
    };
}

export function fetchFavId(itemId) {
    return {
        type: 'SAV_FAVS',
        itemId
    };
}

export function removeFavId(itemId) {
    return {
        type: 'REMOVE_FAVS',
        itemId
    };
}

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return Object.assign({}, state, {
                didInvalidate: true,

                results: action.items.items,
            });
        default:
            return state;
    }
}

export function profileData(state = [], action) {
    switch (action.type) {
        case 'PROFILE_FETCH_DATA_SUCCESS':
            console.log(action.profileData)
            return Object.assign({}, state, {
                didInvalidate: true,

                results: action.profileData,
            });
        default:
            return state;
    }
}

export function searchTerm(state = '', action) {
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return action.searchTerm;
        default:
            return state;
    }
}
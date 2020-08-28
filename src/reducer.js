export const initialState = {
    term: null
};

export const actionType = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
};

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case actionType.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            }

        default:
            return state;
    }
};

export default reducer;
const contentReducer = (function() {
    const { 
        START_CHANGE_TAB_ACTION,
        CHANGE_TAB_ACTION_FAILURE,
        CHANGE_TAB_ACTION_SUCCESS 
    } = contentActions;
                
    return (state = {}, action) => {
        switch(action.type) {
            case START_CHANGE_TAB_ACTION:
                return { ...state, tab: action.payload.tab, isLoading: true, articles: [], error: false };
            case CHANGE_TAB_ACTION_SUCCESS:
                return { ...state, articles: action.payload.articles, isLoading: false };
            case CHANGE_TAB_ACTION_FAILURE: 
                return { ...state, error: action.payload.error, isLoading: false };
            default:
                return state; 
        }
    }
})();
const contentReducer = (function() {
    const { 
        START_CHANGE_TAB_ACTION,
        CHANGE_TAB_ACTION_FAILURE,
        CHANGE_TAB_ACTION_SUCCESS 
    } = contentActions;

    const initialState = {
    };
                
    return (state = initialState, action) => {
        switch(action.type) {
            case START_CHANGE_TAB_ACTION:
                return { ...state, tab: action.payload, loading: true };
            case CHANGE_TAB_ACTION_SUCCESS:
                return { ...state, articles: action.payload, loading: false };
            default:
                return state; 
        }
    }
})();
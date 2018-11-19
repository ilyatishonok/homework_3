const contentActions = (function() {
    const START_CHANGE_TAB_ACTION = 'START_CHANGE_TAB_ACTION';
    const CHANGE_TAB_ACTION_FAILURE = 'CHANGE_TAB_ACTION_FAILURE';
    const CHANGE_TAB_ACTION_SUCCESS = 'CHANGE_TAB_ACTION_SUCCESS';

    const startChangeTabAction = tab => ({
        type: START_CHANGE_TAB_ACTION,
        payload: {
            tab,
        },
    });

    const createChangeTabActionSuccess = articles => ({
        type: CHANGE_TAB_ACTION_SUCCESS,
        payload: {
            articles,
        },
    });

    const createChangeTabActionFailure = error => ({
        type: CHANGE_TAB_ACTION_FAILURE,
        payload: {
            error,
        },
    })


    return {
        START_CHANGE_TAB_ACTION,
        CHANGE_TAB_ACTION_FAILURE,
        CHANGE_TAB_ACTION_SUCCESS,
        startChangeTabAction,
        createChangeTabActionSuccess,
        createChangeTabActionFailure,
    }
})();
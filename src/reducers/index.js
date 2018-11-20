const { combineReducer } = storeManager;

const rootReducer = combineReducer({
    content: contentReducer,
});
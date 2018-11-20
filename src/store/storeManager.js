const storeManager = (function() {
    const createStore = reducer => {
        let state;
        let listeners = [];
    
        const getState = () => state;
        
        const dispatch = action => {
            state = reducer(state, action);
            listeners.forEach(listener => listener());
        };
    
        const subscribe = newListener => {
            listeners.push(newListener);
    
            return () => {
                listeners = listeners.filter(listener => listener !== newListener);
            }
        };
    
        dispatch({});
    
        return { getState, dispatch, subscribe };
    }

    const combineReducer = reducers => {
        return (state = {}, action) => {
            return Object.keys(reducers).reduce(
                (nextState, key) => {
                    nextState[key] = reducers[key](
                        state[key],
                        action
                    );
    
                    return nextState;
                },
                {}
            )
        }
    }


    return {
        createStore,
        combineReducer,
    };
})();
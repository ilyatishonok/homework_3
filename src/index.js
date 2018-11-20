const application = (function() {
    const { createStore } = storeManager; 
    
    const store = createStore(rootReducer);

    new Tabs(document.querySelector('.tabs'), {
        categories: ['Programming', 'Dance', 'Music', 'Games'],
        apiKey: 'e3f4198bcce84c8ba6d01cda68933d4f',
        source: 'https://newsapi.org/v2/everything',
        dispatch: store.dispatch,
    }).render();

    new Content(document.querySelector('.content'), {
        subscribe: store.subscribe,
        getState: store.getState,
    }).render();
})();
const application = (function() {
    new Tabs(document.querySelector('.tabs')).render();
    new Content(document.querySelector('.content')).render();
})();
const application = (function() {
    new Tabs(document.querySelector('.tabs'), {
        categories: ['Programming', 'Dance', 'Music', 'Games'],
        apiKey: 'e3f4198bcce84c8ba6d01cda68933d4f',
        source: 'https://newsapi.org/v2/everything',
    }).render();

    new Content(document.querySelector('.content')).render();
})();
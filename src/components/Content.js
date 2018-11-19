class Content extends ConnectedComponent {
    constructor(element, props) {
        super(element, props);
    }

    mapStateToProps(state) {
        return {
            isLoading: state.content.loading,
            articles: state.content.articles,
            error: state.content.error,
            tab: state.content.tab,
        }
    }

    render() {
        const { isLoading, articles, error, tab } = this.props;

        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }

        if (isLoading) {
            const loading = document.createElement('div');
            loading.classList.add('spinner');
            return this.element.appendChild(loading);
        }

        if (!tab) {
            const noContentProvidedElement = document.createElement('div');
            noContentProvidedElement.textContent = 'Please select any tab';

            return this.element.appendChild(noContentProvidedElement);
        }

        if (error) {
            const error = document.createElement('error');
            error.classList.add('error');
            return this.element.appendChild(error);   
        }

        if (articles && articles.length) {
            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');
                const articleImageLink = document.createElement('a');
                const articleImage = document.createElement('img');
                articleImage.classList.add('image');
                articleImage.setAttribute('src', `${article.urlToImage}`);
                articleImageLink.appendChild(articleImage);
                const articleBody = document.createElement('div');
                const articleMeta = document.createElement('div');
                const articleAuthourElement = document.createElement('div');
                articleAuthourElement.textContent = 'asdfasdf';
                const articleDateElement = document.createElement('div');
                articleDateElement.textContent = '12 March asdf';
                articleMeta.appendChild(articleAuthourElement);
                articleMeta.appendChild(articleDateElement);
                const articleTitle = document.createElement('div');
                articleBody.appendChild(articleMeta);
                articleBody.appendChild(articleTitle);
                articleTitle.textContent = `${article.title}`;
                articleElement.appendChild(articleImageLink);
                articleElement.appendChild(articleBody);
                this.element.appendChild(articleElement)
            });
        }
    }
}
class Content extends ConnectedComponent {
    mapStateToProps(state) {
        return {
            isLoading: state.content.isLoading,
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
                const articleElement = document.createElement('a');
                const articleContentElement = document.createElement('div');
                const articleTitle = document.createElement('h1');
                articleTitle.textContent = article.title;
                articleContentElement.classList.add('article-content');
                articleElement.setAttribute('href', article.url);
                articleElement.classList.add('article');
                articleElement.style.background = `url(${article.urlToImage})`;
                articleElement.style.backgroundSize = 'cover';
                articleElement.style.backgroundPosition = 'center';
                articleContentElement.appendChild(articleTitle);
                articleTitle.style.margin = '0px';
                const articleDescription = document.createElement('div');
                articleDescription.textContent = article.description;
                articleContentElement.appendChild(articleDescription);
                articleElement.appendChild(articleContentElement);
        
                this.element.appendChild(articleElement)
            });
        }
    }
}
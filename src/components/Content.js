class Content extends ConnectedComponent {
    mapStateToProps(state) {
        return {
            isLoading: state.content.isLoading,
            articles: state.content.articles,
            error: state.content.error,
            tab: state.content.tab,
        }
    }

    createLoadingElement() {
        const loadingElement = document.createElement('div');
        loadingElement.classList.add('spinner');

        return loadingElement;
    }

    createSelectTabElement() {
        const selectTabElement = document.createElement('h2');
        selectTabElement.innerHTML = 'Please, select any Tab to display <b style="color: #491253">20 random articles</b> of chosen category';
        
        return selectTabElement;
    }

    createErrorElement(error) {
        const errorElement = document.createElement('error');
        errorElement.classList.add('error');
        errorElement.textContent = error;
            
        return errorElement;
    }

    createArticleElement(article) {
        const articleElement = document.createElement('a');
        const articleContentElement = document.createElement('div');
        const articleTitleElement = document.createElement('h1');
        const articleDescriptionElement = document.createElement('div');

        articleElement.setAttribute('href', article.url);

        articleTitleElement.textContent = article.title;
        articleDescriptionElement.textContent = article.description;

        articleElement.classList.add('article');
        articleContentElement.classList.add('article-content');
        articleTitleElement.classList.add('article-title');
        articleDescriptionElement.classList.add('article-description');

        articleElement.style.backgroundImage = article.urlToImage ?
            `url(${article.urlToImage})` :
            `url(http://www.pinnacleeducations.in/wp-content/uploads/2017/05/no-image.jpg)`;
        

        articleContentElement.appendChild(articleTitleElement);
        articleContentElement.appendChild(articleDescriptionElement);
        articleElement.appendChild(articleContentElement);

        return articleElement;
    }

    render() {
        const { isLoading, articles, error, tab } = this.props;

        if (isLoading) {
            return this.element.appendChild(this.createLoadingElement());
        }

        if (!tab) {
            return this.element.appendChild(this.createSelectTabElement());
        }

        if (error) {
            return this.element.appendChild(this.createErrorElement(error));  
        }

        if (articles && articles.length) {
            articles.forEach(article => {
                this.element.appendChild(this.createArticleElement(article));
            });
        }
    }
}
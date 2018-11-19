class Tabs extends Component{
    constructor(element, props) {
        super(element, props);
        
        this.onElementClick = this.onElementClick.bind(this);
        this.currentTab = null;
        this.categories = ['People', 'Techno', 'Music', 'Auto'];
    }

    onElementClick() {
        const { target } = event;

        if (target.classList.contains('tab')) {
            if (this.currentTab !== target) {
                if (this.currentTab) {
                    this.currentTab.classList.remove('selected');
                }

                this.currentTab = target;

                this.currentTab.classList.add('selected');

                store.dispatch({
                    type: 'START_CHANGE_TAB_ACTION',
                    payload: target.textContent,
                });

                fetch(`https://newsapi.org/v2/everything?page=1&q=${target.textContent}&apiKey=e3f4198bcce84c8ba6d01cda68933d4f`).then(data => data.json())
                    .then(data => {
                        store.dispatch({
                            type: 'CHANGE_TAB_ACTION_SUCCESS',
                            payload: data.articles,
                        })
                    });
            } 
            
        }
    }

    render() {
        this.categories.forEach(categorie => {
            const categorieElement = document.createElement('div');
            categorieElement.classList.add('tab');
            categorieElement.textContent = categorie;

            this.element.appendChild(categorieElement);
        });

        this.element.addEventListener('click', this.onElementClick);
    }
}
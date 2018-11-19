class Tabs extends Component {
    constructor(element, props) {
        super(element, props);
        
        this.onElementClick = this.onElementClick.bind(this);
        this.currentTab = null;
    }

    onElementClick() {
        const { target } = event;
        const { apiKey, source } = this.props;
        const { 
            createChangeTabActionSuccess,
            createChangeTabActionFailure,
            startChangeTabAction 
        } = contentActions;

        if (target.classList.contains('tab')) {
            if (this.currentTab !== target) {
                if (this.currentTab) {
                    this.currentTab.classList.remove('selected');
                }

                this.currentTab = target;

                this.currentTab.classList.add('selected');

                store.dispatch(startChangeTabAction(target.textContent));

                const page = Math.floor(Math.random() * 50);

                fetch(`${source}?apiKey=${apiKey}&q=${target.textContent}`)
                    .then(res => res.json())
                    .then(data => {
                        store.dispatch(createChangeTabActionSuccess(data.articles));
                    })
                    .catch(err => {
                        store.dispatch(createChangeTabActionFailure(err));
                    });
            } 
            
        }
    }

    render() {
        const { categories } = this.props;

        categories.forEach(category => {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('tab');
            categoryElement.textContent = category;

            this.element.appendChild(categoryElement);
        });

        this.element.addEventListener('click', this.onElementClick);
    }
}
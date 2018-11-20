class Tabs extends Component {
    constructor(element, props) {
        super(element, props);
        
        this.onElementClick = this.onElementClick.bind(this);
        this.currentTab = null;
        this.element.addEventListener('click', this.onElementClick);
    }

    onElementClick() {
        const { target } = event;
        const { apiKey, source, dispatch } = this.props;
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

                dispatch(startChangeTabAction(target.textContent));

                const page = Math.floor((Math.random() * 50) + 1);

                fetch(`${source}?page=${page}&apiKey=${apiKey}&q=${target.textContent}`)
                    .then(res => {
                        if (!res.ok) {
                            dispatch(createChangeTabActionFailure(`Sorry, something was going wrong.`));
                        }

                        return res.json();
                    })
                    .then(data => {
                        dispatch(createChangeTabActionSuccess(data.articles));
                    })
                    .catch(() => {
                        dispatch(createChangeTabActionFailure(`Sorry, something was going wrong.`));
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
    }
}
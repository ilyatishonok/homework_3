class ConnectedComponent extends Component {
    constructor(element, props) {
        super(element, props);
        
        let mappings = {};
        
        this.subscribe = store.subscribe(() => {
            const newMappings = this.mapStateToProps(store.getState());

            const isEqual = helper.swallowCompare(newMappings, mappings);

            if (!isEqual) {
                mappings = newMappings;

                this.props = {
                    ...this.props,
                    ...newMappings,
                }

                this.clearElement();
                this.render();
            }
        })
    }

    mapStateToProps() {
        return {};
    }

    detachFromStore() {
        this.subscribe();
    }
}
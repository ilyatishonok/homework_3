class ConnectedComponent extends Component {
    constructor(element, props = {}) {
        super(element, props);

        let mappings = {};

        this.unSubscribe = this.props.subscribe(() => {
            const newMappings = this.mapStateToProps(this.props.getState());

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
        this.unSubscribe();
    }
}
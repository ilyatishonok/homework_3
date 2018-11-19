class Component {
    constructor(element, props = {}) {
        this.element = element;
        this.props = props;
    }

    setState(newState) {
        this.state = {
            ...this.state,
            ...newState,
        };

        this.clearElement();
        this.render();
    }

    clearElement() {
        while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
        }
    }

    render() {
        return true;
    }
}
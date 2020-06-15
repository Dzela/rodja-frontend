import React, {Component} from 'react';

class Part extends Component {

    state = {
        id: null,
        name: null,
        material: null,
        height: null,
        width: null,
        depth: null,
        codeForSupplier: null,
        assembly: {
            id: null,
            name: null
        },
        supplier: {
            id: null,
            name: null
        }
    }

    render() {
        this.setState({id: this.props.id});
        return <p>this.state.id</p>;
    }
}

export default Part;
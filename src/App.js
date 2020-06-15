import React, {Component} from 'react';
import './App.css';

class App extends Component {

    state = {
        isLoading: true,
        parts: []
    };

    async componentDidMount() {
        const response = await fetch('http://localhost:8080/api/parts/');
        const body = await response.json();
        this.setState({parts: body, isLoading: false});
    }

    render() {
        const {parts, isLoading} = this.state;
        if (isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <div className="container-fluid">
                <h1 className="text-center">Parts</h1>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Material</th>
                        <th>Height</th>
                        <th>Width</th>
                        <th>Depth</th>
                        <th>Code For Supplier</th>
                        <th>Count</th>
                        <th>Assembly ID</th>
                        <th>Supplier ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parts.map(part =>
                        <tr key={part.id}>
                            <td>{part.id}</td>
                            <td>{part.name}</td>
                            <td>{part.material}</td>
                            <td>{part.height}</td>
                            <td>{part.width}</td>
                            <td>{part.depth}</td>
                            <td>{part.codeForSupplier}</td>
                            <td>{part.count}</td>
                            <td>{part.assembly.id}</td>
                            <td>{part.supplier.id}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default App;
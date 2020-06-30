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
                        <th>Code For Supplier</th>
                        <th>Height</th>
                        <th>Width</th>
                        <th>Count</th>
                        <th>Status</th>
                        <th>Supplier ID</th>
                        <th>Assembly ID</th>
                        <th>Machine ID</th>
                        <th>Material ID</th>
                    </tr>
                    </thead>
                    <tbody>
                    {parts.map(part =>
                        <tr key={part.id}>
                            <td>{part.id}</td>
                            <td>{part.name}</td>
                            <td>{part.codeForSupplier}</td>
                            <td>{part.height}</td>
                            <td>{part.width}</td>
                            <td>{part.count}</td>
                            <td>{part.status}</td>
                            <td>{part.supplier.id}</td>
                            <td>{part.assembly ? part.assembly.id : ""}</td>
                            <td>{part.machine ? part.machine.id : ""}</td>
                            <td>{part.material.id}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default App;
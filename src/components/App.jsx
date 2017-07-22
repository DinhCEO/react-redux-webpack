import React from 'react';
import FormAddTodo from '../connectors/FormAddTodoConnector.jsx';
import ListTodo from '../connectors/ListTodoConnector.jsx';
import FilterTodo from './FilterTodo.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FormAddTodo/>
                <ListTodo/>
                <FilterTodo/>
            </div>
        )
    }
}

export default App;

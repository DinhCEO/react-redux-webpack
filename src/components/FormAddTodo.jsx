import React from 'react';

class FormAddTodo extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    handleAdd() {
        let {addTodo} = this.props;
        addTodo(this.refs['inputValue'].value);
        this.refs['inputValue'].value = "";
    }

    render() {
        return (
            <div>
                <input ref="inputValue" type="text" placeholder="input text"/>
                <button onClick={this.handleAdd.bind(this)}>add</button>
            </div>
        )
    }
}

export default FormAddTodo;

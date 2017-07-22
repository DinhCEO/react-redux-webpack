import React from 'react';
import {toggleTodo} from '../actions';
import './listTodo.css'


class ListTodo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {data} = this.props;
        return (
            <div>
                <ul>
                    {
                        data.map((item, index) => {
                            return <li className={`${item.isClick ? 'line-through' : 'not-line-through'}`}
                                       onClick={() => {
                                           let {dispatch} = this.props;
                                           dispatch(toggleTodo(item.id))
                                       }} key={index}>{item.id} - {item.text}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default ListTodo;

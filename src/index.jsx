import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import listTodo from './reducers/todo.jsx';
import {addTodo} from './actions';
import App from './components/App.jsx';

let store = createStore(combineReducers({listTodo: listTodo}));

store.dispatch(addTodo('dinhceo'));
store.dispatch(addTodo('dinhceo1'));
store.dispatch(addTodo('dinhceo2'));
store.dispatch(addTodo('dinhceo3'));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
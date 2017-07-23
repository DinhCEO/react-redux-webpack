import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import App from './components/App.jsx';
import {handleActions} from 'redux-actions';
import {addTodo, toggleTodo} from './actions';
import {reducer as formReducer} from 'redux-form';


const defaultState = [];
var idNextTodo     = 0;

const reducer = handleActions({
    [addTodo]   : (state, action) => ([
        ...state,
        {
            id     : idNextTodo++,
            text   : action.payload,
            isClick: false
        }
    ]),
    [toggleTodo]: (state, action) => {
        return state.map((item, index) => {
            return (item.id === action.payload ) ? {...item, isClick: !item.isClick} : item;
        });
    },
    form        : formReducer
}, defaultState);

let store = createStore(reducer, defaultState);

store.dispatch(addTodo('dinhceo-1'));
store.dispatch(addTodo('dinhceo-2'));
store.dispatch(addTodo('dinhceo-3'));

console.log(store);
console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
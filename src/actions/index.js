import {ADD, TOGGLE_TODO} from './action-type.jsx';

var initIdTodo = 0;

export function addTodo(text) {
    return {
        type: ADD,
        id  : initIdTodo++,
        text: text
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id  : id
    }
}


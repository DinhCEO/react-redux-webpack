import {ADD, TOGGLE_TODO} from '../actions/action-type.jsx';

const todoReducers = function (state = [], action) {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                {
                    text   : action.text,
                    id     : action.id,
                    isClick: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(function (item, index) {
                return (item.id === action.id ) ? {...item, isClick: !item.isClick} : item;
            });
        default:
            return state;
    }
};

export default todoReducers;

import {createActions, handleActions, combineActions} from 'redux-actions';
import defaultState from '../defaultState.jsx';


const {increment, decrement} = createActions({
    INCREMENT: (amount) => ({amount}),
    DECREMENT: (amount) => ({amount: -amount})
});

//const reducer = handleActions({
//    [combineActions(increment, decrement)](state, {payload: {amount}}) {
//        return {...state, counter: state.counter + amount};
//    }
//}, defaultState);

const reducer = handleActions({
    [increment](state, { payload: { amount } }) {
        return { counter: state.counter + amount }
    },
    [decrement](state, { payload: { amount } }) {
        return { counter: state.counter + amount }
    }
}, defaultState);





export default reducer;
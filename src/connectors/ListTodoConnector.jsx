import {connect} from 'react-redux';
import ListTodo from '../components/ListTodo.jsx';

const mapStateToProps = (state) => {
    return {
        data: state.listTodo
    }
};

const ListTodoConnector = connect(mapStateToProps)(ListTodo);

export default ListTodoConnector;
import {connect} from 'react-redux';
import ListTodo from '../components/ListTodo.jsx';

const mapStateToProps = (state) => {
    return {
        data: state
    }
};

const ListTodoConnector = connect(mapStateToProps)(ListTodo);

export default ListTodoConnector;
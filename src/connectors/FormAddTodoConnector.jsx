import {connect} from 'react-redux';
import FormAddTodo from '../components/FormAddTodo.jsx';
import {addTodo} from '../actions'
import {bindActionCreators} from 'redux'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addTodo}, dispatch);
};

const FormAddTodoConnector = connect(null, mapDispatchToProps)(FormAddTodo);

export default FormAddTodoConnector;
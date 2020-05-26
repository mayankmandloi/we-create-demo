import {connect} from 'react-redux';
import {addTodo, editTodo} from '../../actionCreator/todoAction'
import { Form } from './Form';

    const mapStateToProps = (state) => {
        return {
            todoList: state.todos
        }
    };

    const mapDispatchToProps = {addTodo, editTodo};

    export default connect (mapStateToProps, mapDispatchToProps) (Form);
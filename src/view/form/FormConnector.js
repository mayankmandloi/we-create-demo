import {connect} from 'react-redux';
import {addTodo} from '../../actionCreator/todoAction'
import { Form } from './Form';

    const mapStateToProps = (state) => {
        return {
            todoList: state.todos
        }
    };

    const mapDispatchToProps = {addTodo};

    export default connect (mapStateToProps, mapDispatchToProps) (Form);
import React, {useContext} from "react";
import PropTypes from "prop-types";
import './Todo-item.scss';
import Context from "../context/Context";

function TodoItem({todo, index}) {

    const {removeTodo, toggleTodo} = useContext(Context);

    return (
        <li className={'item '}>
            <span className={todo.completed ? 'tdlt' : ''}>
                <input
                    checked={todo.completed}
                    onChange={(event) => toggleTodo(event, todo.id)}
                    className={'checkbox'}
                    type='checkbox'/>
                <strong>{index + 1}</strong> &nbsp; {todo.title}
            </span>

            <button onClick={removeTodo.bind(null, todo.id)} className={'delete-btn'}>&times;</button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
}

export default TodoItem;

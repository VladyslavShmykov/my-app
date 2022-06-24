import React from "react";
import './Todo-list.scss';
import TodoItem from "../todo-item/Todo-item";
import PropTypes from 'prop-types';

function TodoList({todos}) {
    return (
        <ul className={'list'}>
            {todos.map((todo, idx) => (
                <TodoItem todo={todo} key={todo.id} index={idx}/>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList;

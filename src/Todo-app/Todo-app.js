import React from "react";
import './Todo-app.scss';
import {useEffect, useState} from "react";
import Context from "./context/Context";
import Modal from "./modal/Modal";
import Loader from "./loader/Loader";
import TodoList from "./todo-list/Todo-list";

const AddTodo = React.lazy(() => import('./add-todo/Add-todo'));

function TodoApp() {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
            .then(response => response.json())
            .then(res => {
                setTimeout(() => {
                    setTodos(res);
                    setLoading(false);
                }, 4000)
            });
    }, [])

    function toggleTodo(event, id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = event.target.checked;
            }
            return todo;
        }));
    }

    function removeTodo(todoId) {
        setTodos(todos.filter(({id}) => id !== todoId));
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false,
        }]));
    }

    return (
        <Context.Provider value={{removeTodo, toggleTodo}}>
            <div className={'wrapper'}>
                <h1>Title</h1>

                <Modal/>

                <React.Suspense fallback={<p>loading...</p>}>
                    <AddTodo onCreate={addTodo}/>
                </React.Suspense>

                {loading && <Loader/>}
                {todos.length ? (
                    <TodoList todos={todos}/>
                ) : (
                    loading ? null : <p>No todos!</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default TodoApp

import './App.scss';
import React from "react";
import Layout from "./shared/UI/layout/layout";
import {Navigate, Route, Routes} from "react-router-dom";
import TicTacToe from "./components/tic-tac-toe/tic-tac-toe";
import Users from "./components/json-placeholder/users/users";
import Posts from "./components/json-placeholder/posts/posts";
import Comments from "./components/json-placeholder/comments/comments";
import Todo from "./components/todo/todo";

function App() {

    const mainHeaderLinks = [
        {
            path: 'json-placeholder',
            name: 'JSON placeholder'
        },
        {
            path: 'tic-tac-toe',
            name: 'Tic-tac-toe'
        },
        {
          path: 'todo',
          name: 'Todo'
        },
    ];

    const jsonPlaceholderHeaderLinks = [
        {
            path: 'users',
            name: 'Users'
        },
        {
            path: 'posts',
            name: 'Posts'
        },
        {
            path: 'comments',
            name: 'Comments'
        },
    ];

    return (
        <div>
            <Routes>
                <Route
                    path=''
                    element={<Layout links={mainHeaderLinks}/>}>
                    <Route
                        index
                        element={<Navigate to='json-placeholder'/>}/>
                    <Route path='json-placeholder' element={<Layout links={jsonPlaceholderHeaderLinks}/>}>
                        <Route
                            index
                            element={<Navigate to='users'/>}/>
                        <Route
                            path='users'
                            element={<Users/>}/>
                        <Route
                            path='posts'
                            element={<Posts/>}/>
                        <Route
                            path='comments'
                            element={<Comments/>}/>
                    </Route>
                    <Route path='tic-tac-toe' element={<TicTacToe/>}/>
                    <Route path='todo' element={<Todo/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

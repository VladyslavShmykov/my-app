import './App.scss';
import React from "react";
import Layout from "./shared/UI/layout/layout";
import {Navigate, Route, Routes} from "react-router-dom";
import TicTacToe from "./components/tic-tac-toe/tic-tac-toe";
import Users from "./components/json-placeholder/users/users";
import Posts from "./components/json-placeholder/posts/posts";
import Comments from "./components/json-placeholder/comments/comments";
import TodoApp from "./components/todo/Todo-app";
import {JSONPLACEHOLDER_HEADER_LINKS, MAIN_HEADER_LINKS} from "./shared/constants/links/links";

function App() {
        return (
        <div>
            <Routes>
                <Route
                    path=''
                    element={<Layout links={MAIN_HEADER_LINKS}/>}>
                    <Route
                        index
                        element={<Navigate to='json-placeholder'/>}/>
                    <Route path='json-placeholder' element={<Layout links={JSONPLACEHOLDER_HEADER_LINKS}/>}>
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
                    <Route path='todo' element={<TodoApp/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

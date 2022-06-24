import React from "react";
import classes from "./app-post-form.module.scss";
import AppInput from "../app-input/app-input";
import AppButton from "../app-button/app-button";
import {useState} from "react";

function AppPostForm({createPost}) {

    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');

    function addNewPost(e) {
        e.preventDefault();
        createPost({id: Date.now(), title, description});
        setTitle('');
        setDesc('');
    }

    return (
        <form onSubmit={e => addNewPost(e)}>
            <AppInput
                value={title}
                onChange={e => setTitle(e.target.value)}
                type='text'
                placeholder='title'/>
            <AppInput
                value={description}
                onChange={e => setDesc(e.target.value)}
                type='text'
                placeholder='description'/>
            <AppButton>Create</AppButton>
        </form>
    );
}

export default AppPostForm

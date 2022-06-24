import './App.scss';
import React, {useState} from "react";
import Posts from "./components/posts/posts";
import AppPostForm from "./components/UI/app-post-form/app-post-form";
import AppSelect from "./components/UI/app-select/app-select";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', description: 'Javascript is ...'},
        {id: 2, title: 'Javascript', description: 'Javascript is ...'},
        {id: 3, title: 'Javascript', description: 'Javascript is ...'},
        {id: 4, title: 'Javascript', description: 'Javascript is ...'}
    ]);

    function createPost(newPost) {
        setPosts([...posts, newPost]);
    }

    function removePost(id) {
        setPosts(posts.filter(item => item.id !== id));
    }

    return (
        <div className='app'>

            <AppPostForm createPost={createPost}/>

            <AppSelect/>

            {posts.length ? (
                <h3 className='no-items'>No posts!</h3>
            ) : (
                <Posts removePost={removePost} posts={posts} title='Posts list JS'/>
            )}

        </div>
    );
}

export default App;

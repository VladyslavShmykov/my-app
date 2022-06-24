import React from "react";
import './posts.scss';
import PostItem from "./post-item/post-item";

function Posts({posts, title, removePost}) {
    return (
        <div>
            <h1 className='title'>{title}</h1>
            {posts.map(({id, title, description}, idx) => (
                <PostItem key={id} id={id} idx={idx} title={title} description={description} remove={removePost}/>
            ))}
        </div>
    );
}

export default Posts

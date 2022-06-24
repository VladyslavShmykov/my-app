import React from "react";
import './post-item.scss';
import AppButton from "../../UI/app-button/app-button";

function PostItem({idx, id, title, description, remove}) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{idx + 1}. {title}</strong>
                <div>
                    {description}
                </div>
            </div>

            <div className='post__btns'>
                <AppButton onClick={() => remove(id)}>delete</AppButton>
            </div>
        </div>
    );
}

export default PostItem

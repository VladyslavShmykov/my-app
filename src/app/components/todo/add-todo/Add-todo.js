import React from "react";
import './Add-todo.scss';
import PropTypes from "prop-types";
import useInputValue from "./use-input-value/Use-input-value";

function AddTodo({onCreate}) {

    const input = useInputValue('');
    
    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    function animationHandler(switcher) {
        if (switcher && input.value().trim()) {
            document.getElementById('add-btn').classList.add('animation');
        } else {
            document.getElementById('add-btn').classList.remove('animation');
        }
    }

    return (
        <form className={'add-form'} onSubmit={submitHandler}>
            <input className={'add-input'} {...input.bind}/>
            <button
                id='add-btn'
                onClick={() => animationHandler(true)}
                onAnimationEnd={() => {animationHandler(false)}}
                className={'add-btn'}
            >Add todo</button>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default AddTodo

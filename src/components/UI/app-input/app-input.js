import React from "react";
import classes from "./app-input.module.scss";

function AppInput({...props}) {
    return (
        <input className={classes.input} {...props}/>
    );
}

export default AppInput

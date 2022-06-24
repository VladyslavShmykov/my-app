import React from "react";
import classes from './app-button.module.scss';

function AppButton({children, ...props}) {
    return (
        <button {...props} className={classes.button}>
            {children}
        </button>
    );
}

export default AppButton

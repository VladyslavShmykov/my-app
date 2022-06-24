import React from "react";
import './Loader.scss'

function Loader() {
    return (
        <div>
            <span className={'slide ad1'}>
                <p className={'spin ad1'}>&#128169;</p>
            </span>
            <span className={'slide ad2'}>
                <p className={'spin ad2'}>&#128169;</p>
            </span>
            <span className={'slide ad3'}>
                <p className={'spin ad3'}>&#128169;</p>
            </span>
            <span className={'slide ad4'}>
                <p className={'spin ad4'}>&#128169;</p>
            </span>

        </div>
    );
}

export default Loader

import React from "react";
import {Link} from "react-router-dom";

export default function Header({links}) {
    return (
        <header>{
            links.map((link, idx) => (
                <Link key={idx} to={link.path}>{link.name}</Link>
            ))
        }</header>
    );
}


import React from 'react';
import './Header.css';
const data = require('./content/HeaderData');

function Header() {
    return (
        <div>
            <header>
                <h1> { data.name } </h1>
                <h3> { data.title } </h3>
                <a href = { "mailto: " + data.email } > <h3>Email</h3> </a>
                <a href = { data.github } > <h3>GitHub</h3> </a>
                <a href = { data.linkedin } > <h3>LinkedIn</h3> </a>
            </header>
        </div>
    );
}

export default Header;
import React from "react";

export default function Header(){

    return(
        <header className="header">
            <nav className="nav">
                <img id="logo" alt="react-logo"  src="https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg"></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                {/* <h3>React Facts</h3>
                <span>React Course - Project 1</span> */}
            </nav>
      </header>
    )



}
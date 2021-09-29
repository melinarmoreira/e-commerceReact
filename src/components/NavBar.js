import React from "react";
import './NavBar.css';
import CartWidget from "./CartWidget";

function NavBar () {
    return (
        <nav className="navStyle">
            <h1 className="brand">Mi e-commerce</h1>
                <div>
                    <ul>
                        <li className="linkNav">
                            <a href="/">Link</a>
                        </li>
                        <li className="linkNav">
                            <a href="/">Link</a>
                        </li>
                        <li className="linkNav">
                            <a href="/">Link</a>
                        </li>
                        <li className="linkNav" id="searchNav">
                            <input type="search" placeholder="search">
                            </input>
                                <button className="buttonSearch">
                                    Search
                                </button>
                        </li>
                        {<CartWidget/>}
                    </ul>
                </div>
        </nav>
    )
}

export default NavBar;
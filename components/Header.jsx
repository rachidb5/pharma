import React from 'react';
import { BiUserCircle } from "react-icons/bi";

function Header() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="d-flex justify-content-between container-fluid">
                <a className="navbar-brand text-dark" href="#">
                    Pharma Inc.
                </a>
                <div className="d-flex">
                    <BiUserCircle size='30'/>
                </div>
            </div>
        </nav>
    )
}

export default Header;
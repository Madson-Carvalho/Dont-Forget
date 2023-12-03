import React from "react";

import './Nav.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGamepad, faHome, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/"><FontAwesomeIcon icon={faHome}/> HOME</Link>
            <Link to="/login"><FontAwesomeIcon icon={faCircleUser}/> LOGIN</Link>
            <Link id="register" to="/register"><FontAwesomeIcon icon={faIdCard}/> REGISTRE-SE</Link>
            {/* <Link to="#"><FontAwesomeIcon icon={faCircleInfo}/> SOBRE</Link>
            <Link to="#"><FontAwesomeIcon icon={faAddressBook}/> CONTATO</Link> */}
        </nav>
    )
}

export default Nav;
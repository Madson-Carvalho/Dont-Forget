import './Header.css';
import Nav from "../nav/Nav";

import img from '../../images/df-logo-circle-removebg-preview.png'

function Header() {
    return (
        <header>
            <div className="img">
               <img src={img}/> 
            </div>
            <Nav/>
        </header>
    )
}

export default Header;

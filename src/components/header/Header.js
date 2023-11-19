import './Header.css';
import Nav from "../nav/Nav";

import img from '../../images/df-logo-circle-removebg-preview.png'
import { useEffect, useState } from 'react';

function Header() {
    const [header, setHeader] = useState("header")

    const listenScrollEvent = (event) => {
        if (window.scrollY < 430) {
            return setHeader("header")
        } else if (window.scrollY > 450) {
            return setHeader("header2")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={header}>
            <div className="img">
                <img src={img} />
            </div>
            <Nav />
        </header>
    )
}

export default Header;

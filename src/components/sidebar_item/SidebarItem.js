import './SidebarItem.css';

import { Link } from 'react-router-dom';

const SidebarItem = ({link, text, icon}) => {
    return (
        <li className={`sidebar-item ${window.location.pathname === link ? 'active-link' : ''}`}>
            <Link to={link} >
                <span className='icon'>{icon}</span>
                <span className='text'>{text}</span>
            </Link>
        </li>
    )
}

export default SidebarItem;
import './SidebarItem.css';

import { Link } from 'react-router-dom';

const SidebarItem = ({link, text, icon, isOpen, alignEnd}) => {
    return (
        <li className={`${isOpen ? 'sidebar-item' : 'sidebar-item-close'} ${window.location.pathname === link ? 'active-link' : ''}`} style={alignEnd ? {position: 'absolute', bottom: 0} : null}>
            <Link to={link} >
                <span className='icon'>{icon}</span>
                <span className='text'>{text}</span>
            </Link>
        </li>
    )
}

export default SidebarItem;
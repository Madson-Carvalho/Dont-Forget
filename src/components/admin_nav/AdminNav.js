import './AdminNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faComments, faUserCircle } from '@fortawesome/free-regular-svg-icons';

const AdminNav = () => {
    return (
        <nav className='admin-nav'>
            {/* <FontAwesomeIcon icon={faComments} /> */}
            <FontAwesomeIcon icon={faBell} />
            <FontAwesomeIcon icon={faUserCircle} />
        </nav>
    )
}

export default AdminNav;
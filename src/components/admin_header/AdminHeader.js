import './AdminHeader.css';

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminNav from "../admin_nav/AdminNav";

const AdminHeader = () => {
    return (
        <header className="admin-header">
            <div className="header-hamburguer">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <AdminNav />
        </header>
    )
}

export default AdminHeader;
import { Link } from 'react-router-dom';

import logo from '../../images/df-logo-circle-removebg-preview.png';
import defaultUser from '../../images/default-user-2.avif';

const AdminSidebarMenu = () => {
    return (
        <>
            {/* Main Sidebar Container */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <Link to={'/admin-home'} className="brand-link">
                    <img
                        src={logo}
                        alt="Don't Forget Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: ".8" }}
                    />
                    <span className="brand-text font-weight-light">Don't Forget</span>
                </Link>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src={defaultUser}
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div className="info">
                            <Link to={'#'} className="d-block">
                                Madson Carvalho
                            </Link>
                        </div>
                    </div>
                    {/* Sidebar Menu */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                        >
                            {/* Add icons to the links using the .nav-icon class
       with font-awesome or any other icon font library */}
                            <li className="nav-item menu-open">
                                <Link to={'/admin-home'} className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>Dashboard &nbsp;&nbsp;&nbsp; <i className="right fas fa-angle-left" /></p>
                                </Link>
                                {/* <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Active Page</p>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Inactive Page</p>
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link to={'#'} className="nav-link">
                                    <i className="nav-icon fas fa-th" />
                                    <p>
                                        Simple Link
                                        <span className="right badge badge-danger">New</span>
                                    </p>
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </>

    )
}

export default AdminSidebarMenu;
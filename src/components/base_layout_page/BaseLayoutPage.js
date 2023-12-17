import './BaseLayoutPage.css';

import { useState } from 'react';
import AdminFooter from '../admin_footer/AdminFooter';
import AdminSidebarMenu from '../admin_sidebar_menu/AdminSidebarMenu';
import AdminHeader from './../admin_header/AdminHeader';

const BaseLayoutPage = ({ children, title }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="app">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className={`grid-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
            <AdminSidebarMenu isOpen={isSidebarOpen} />
            {/* Content Wrapper */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div>
                            <div>
                                <h1>{title}</h1>
                            </div>
                            {/* /.col */}
                            <div>
                                <ol>
                                    <li>
                                        <a href="#">{title}</a>
                                    </li>
                                    <li>Admin Home</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
        <AdminFooter />
    </div>
    )
}

export default BaseLayoutPage;
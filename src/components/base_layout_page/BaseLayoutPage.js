import './BaseLayoutPage.css';

import { useState } from 'react';
import AdminFooter from '../admin_footer/AdminFooter';
import AdminSidebarMenu from '../admin_sidebar_menu/AdminSidebarMenu';
import AdminHeader from './../admin_header/AdminHeader';

const BaseLayoutPage = ({ children, title, toggleSidebar, isSidebarOpen }) => {
    return (
        <div className='container'>
            <AdminHeader toggleSidebar={toggleSidebar} />
            <div className='contentContainer'>
                <AdminSidebarMenu isOpen={isSidebarOpen} />
                <div className='content'>
                    <div className="content-header">
                        <h1>{title}</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
            <AdminFooter />
        </div>
    )
}

export default BaseLayoutPage;
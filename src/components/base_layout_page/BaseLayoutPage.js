import AdminFooter from '../admin_footer/AdminFooter';
import AdminSidebarMenu from '../admin_sidebar_menu/AdminSidebarMenu';
import AdminHeader from './../admin_header/AdminHeader';

const BaseLayoutPage = ({children, title}) => {
    return (
        <div className="wrapper">
            <AdminHeader />
            <AdminSidebarMenu />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">{title}</h1>
                            </div>
                            {/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#">{title}</a>
                                    </li>
                                    <li className="breadcrumb-item active">Admin Home</li>
                                </ol>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <div className="content">
                    {children}
                    {/* /.container-fluid */}
                </div>
                {/* /.content */}
            </div>
            <AdminFooter />
        </div>
    )
}

export default BaseLayoutPage;
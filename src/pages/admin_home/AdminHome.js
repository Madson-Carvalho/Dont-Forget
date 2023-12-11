import AdminFooter from "../../components/admin_footer/AdminFooter";
import AdminHeader from "../../components/admin_header/AdminHeader"
import AdminHomeContent from "../../components/admin_home_content/AdminHomeContent";
import AdminSidebarMenu from "../../components/admin_sidebar_menu/AdminSidebarMenu";

const AdminHome = () => {
    return (
        <div className="wrapper">
            <AdminHeader />
            <AdminSidebarMenu />
            < AdminHomeContent />
            <AdminFooter />
        </div>
    )
}

export default AdminHome;
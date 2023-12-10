import AdminFooter from "../../components/admin_footer/AdminFooter";
import AdminHeader from "../../components/admin_header/AdminHeader"
import AdminHomeContent from "../../components/admin_home_content/AdminHomeContent";
import AdminSidebarMenu from "../../components/admin_sidebar_menu/AdminSidebarMenu";
import ControlSideBar from "../../components/control_sidebar/ControlSidebar";

const AdminHome = () => {
    return (
        <div class="wrapper">
            <AdminHeader />
            <AdminSidebarMenu />
            <AdminHomeContent />
            <ControlSideBar />
            <AdminFooter />
        </div>
    )
}

export default AdminHome;
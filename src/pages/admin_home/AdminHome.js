import AdminHomeContent from "../../components/admin_home_content/AdminHomeContent";
import BaseLayoutPage from "../../components/base_layout_page/BaseLayoutPage";

const AdminHome = ({isSidebarOpen, toggleSidebar}) => {
    return (
        <BaseLayoutPage title={'Dashboard'} isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} >
            < AdminHomeContent />
        </BaseLayoutPage>
    )
}

export default AdminHome;
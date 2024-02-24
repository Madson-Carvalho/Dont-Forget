import { Route, Routes } from "react-router-dom"
import { useState } from "react";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import UserRegister from "../pages/user_register/UserRegister";
import AdminHome from "../pages/admin_home/AdminHome";
import CreateList from "../pages/create_list/CreateList";
import Contact from "../pages/contact/Contact";
import MyLists from "../pages/my_lists/MyLists";
import CreateListItem from "../pages/create_list_item/CreateListItem";
import Friends from './../pages/friends/Friends';
import AddNewFriend from "../pages/add_new_friend/AddNewFriend";
import FriendsGroups from "../pages/friends_groups/FriendsGroups";

const CustomRoutes = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/admin-home" element={<AdminHome isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/create-list" element={<CreateList isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/contact" element={<Contact isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/my-lists" element={<MyLists isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/create-list-intens" element={<CreateListItem isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/friends" element={<Friends isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/add-new-friend" element={<AddNewFriend isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
            <Route path="/friends-groups" element={<FriendsGroups isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />} />
        </Routes>
    )
}

export default CustomRoutes;
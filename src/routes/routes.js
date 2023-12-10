import { Route, Routes } from "react-router-dom"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import UserRegister from "../pages/user_register/UserRegister";
import AdminHome from "../pages/admin_home/AdminHome";

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<UserRegister />} />
            <Route path="/admin-home" element={<AdminHome />} />
        </Routes>
    )
}

export default CustomRoutes;
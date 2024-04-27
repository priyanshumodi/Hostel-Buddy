import React from "react";
import AdminHeader from "./components/Admin/AdminHeader"
import { Outlet } from "react-router-dom";

function AdminLayout() {
    return (
        <>
        <AdminHeader/>
        <Outlet/>
        </>
    )
}

export default AdminLayout
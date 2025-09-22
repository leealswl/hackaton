import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav.jsx";

const Layout = () => {
    return (
        <div className="app-layout" style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        </div>
    );
};

export default Layout;

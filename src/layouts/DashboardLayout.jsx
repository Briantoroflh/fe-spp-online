import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
} from "../components/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function DashboardLayout({ children }) {
  const { user } = useAuth();
  const username = user?.username;
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const Menu = [
    {
      icon: <i className="ri-dashboard-3-fill"></i>,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <i className="ri-bill-fill"></i>,
      name: "Tagihan",
      url: "/bill-student",
    },
    { icon: <i className="ri-user-fill"></i>, name: "Murid", url: "/student" },
    {
      icon: <i className="ri-user-2-fill"></i>,
      name: "Petugas",
      url: "/officer",
    },
  ];

  return (
    <div className="bg-neutral-100 min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 bg-white shadow-lg w-64 
        transform transition-transform duration-300 ease-in-out 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} 
        md:translate-x-0`}
      >
        <Sidebar>
          <SidebarHeader>
            <img
              src="./src/assets/logo-smartspp-v2.svg"
              alt="logo"
              className="w-32 mx-auto"
            />
          </SidebarHeader>
          <SidebarContent>
            {Menu.map((items, index) => {
              const isActive = location.pathname === items.url;
              return (
                <SidebarItem
                  key={index}
                  className={`flex items-center gap-2 p-2 rounded-md mt-2 
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  <Link
                    to={items.url}
                    className="flex items-center gap-2 w-full"
                  >
                    {items.icon}
                    {items.name}
                  </Link>
                </SidebarItem>
              );
            })}
          </SidebarContent>
        </Sidebar>
      </div>

      {/* Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-30 md:ml-64">
        <Navbar>
          {/* Tombol toggle sidebar (mobile) */}
          <button
            className="md:hidden mr-3 text-neutral-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>

          <div className="flex justify-between w-full items-center">
            <div>
              <h1 className="font-poppins font-bold text-xl text-blue-500">
                Dashboard
              </h1>
              <p className="font-poppins text-sm text-neutral-500">Dashboard</p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex flex-col font-poppins">
                <p className="text-xs font-semibold text-neutral-500">
                  Welcome
                </p>
                <h3 className="font-bold text-lg text-neutral-500">
                  {username}
                </h3>
              </div>
              <div className="rounded-full flex items-center justify-center w-10 h-10 text-neutral-500 border">
                <i className="ri-user-5-fill ri-lg"></i>
              </div>
            </div>
          </div>
        </Navbar>
      </div>

      {/* Main Content */}
      <main className="pt-20 md:ml-64 p-4">{children}</main>
    </div>
  );
}

export default DashboardLayout;

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarItem,
} from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

function DashboardLayout(props) {
  const { children } = props;
  const { user } = useAuth();
  const username = user?.name;
  const location = useLocation();
  const Menu = [
    {
      icon: <i className="ri-dashboard-3-fill"></i>,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      icon: <i className="ri-bill-fill"></i>,
      name: "Bill",
      url: "/bill-student",
    },
    {
      icon: <i className="ri-user-fill"></i>,
      name: "Users",
      url: "/bill-student",
    },
    {
      icon: <i className="ri-user-2-fill"></i>,
      name: "Students",
      url: "/bill-student",
    },
  ];
  return (
    <div className="flex min-w-screen bg-neutral-200">
      <Sidebar>
        <SidebarHeader>
          <img
            src="./src/assets/logo-smartspp-v2.svg"
            alt=""
            className="w-35 mt-2"
          />
        </SidebarHeader>
        <SidebarContent>
          {Menu.map((items, index) => {
            const isActive = location.pathname === items.url;
            return (
              <div className="mt-4">
                <SidebarItem
                  key={index}
                  href={items.url}
                  className={isActive ? "bg-blue-500 text-white" : ""}
                >
                  {items.icon}
                  {items.name}
                </SidebarItem>
              </div>
            );
          })}
        </SidebarContent>
      </Sidebar>
      <Navbar>
        <div>
          <h1 className="font-poppins font-bold text-xl text-blue-500">
            Dashboard
          </h1>
          <p className="font-poppins text-sm text-neutral-500">Dashboard</p>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col font-poppins">
            <p className="text-xs font-semibold text-neutral-500">Welcome</p>
            <h3 className="font-bold text-lg text-neutral-500">{username}</h3>
          </div>
          <div className="outline-2 rounded-full flex items-center justify-center w-10 h-10 text-neutral-500">
            <i className="ri-user-5-fill ri-lg"></i>
          </div>
        </div>
      </Navbar>
      <div className="">{children}</div>
    </div>
  );
}

export default DashboardLayout;

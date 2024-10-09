import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";
import SideBarsmall from "./SideBarsmall";
import { Outlet } from "react-router-dom";
import WatchPage from "./WatchPage";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const issidebar = useSelector((store) => store.app.issidebar);
  return (
    <div className="flex  top-12  ">
      {!isMenuOpen ?"": <Sidebar />}
 
     

      <Outlet />
    </div>
  );
};

export default Body;

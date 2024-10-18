import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";
import Searchresults from "./Searchresults";
import { useSelector } from "react-redux";


const MainContainer = () => {
  const searchpage = useSelector((store) => store.app.searchpage);
  return (
    <div className="pt-14 flex  overflow-scroll h-screen w-screen   ">
       <VideoContainer /> 
    </div>
  );
};

export default MainContainer;

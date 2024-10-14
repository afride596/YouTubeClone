import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import Sidebar from "./Sidebar";

const MainContainer = () => {
  return (
    <div className="pt-14 flex  flex-col ">
      <div className=" top-[80px] fixed w-screen h-12 bg-white pl-20 z-0 items-center ">
        <ButtonList />
      </div>

      <VideoContainer />
    </div>
  );
};

export default MainContainer;

import React from "react";

const Sidebar = () => {
  return (
    <div className=" ">
      <div className="w-60 h-screen  shadow-sm   ">
        <div className="border-b-  shadow-none  pt-10 flex  items-center border-[#00000020] border-b pb-2">
          <ul className="pl-10 font-medium flex flex-col gap-2">
            <li>Home</li>
            <li>Shorts</li>
            <li>subscriptions</li>
          </ul>
        </div>
        <div className="pl-10 border-[#00000020] border-b pb-2">
          <h1 className="text-xl font-bold">YOU</h1>
          <ul className="font-medium flex flex-col gap-2">
            <li>Your channel</li>
            <li>History</li>
            <li>Playlists</li>
            <li>Your videos</li>
            <li>Your courses</li>
            <li>Watch later</li>
            <li>Liked videos</li>
          </ul>
        </div>
        <div className="pl-10 pt-1 border-[#00000020] border-b pb-2">
          <h1 className="font-bold text-2xl">Explore</h1>
          <ul className="font-medium flex flex-col gap-2">
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Courses</li>
            <li>Fashion & Beauty</li>
            <li>Podcasts</li>
          </ul>
        </div>
        <div className="pl-10">
          <ul className="font-medium flex flex-col gap-2">
            <li>Settings</li>
            <li>Report history</li>
            <li> Help</li>
            <li> Send feedback</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

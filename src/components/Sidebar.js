import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const HomeData = ["Home", "Shorts", "subscriptions"];
const YouSection = [
  "Your channel",
  "History",
  "Playlists",
  "Your videos",
  "Your courses",
  "Watch later",
  "Liked videos",
];

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="h-screen  pt-20   ">
      <div className="w-60 relative   h-screen  overflow-hidden hover:overflow-y-scroll scroll-smooth   ">
        <div className="  shadow-none  pt-3 flex  items-center border-[#00000020] border-b pb-4">
          <ul className="pl-10 font-medium flex flex-col gap-4">
            {HomeData.map((eachlist) => (
              <Link to="/">
                <li>{eachlist}</li>{" "}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pl-10 border-[#00000020] border-b pb-4">
          <h1 className="text-xl font-bold pb-3">YOU</h1>
          <ul className="font-medium flex flex-col gap-4">
            {YouSection.map((eachlist) => (
              <Link to="/">
                <li>{eachlist}</li>{" "}
              </Link>
            ))}
          </ul>
        </div>
        <div className="pl-10 pt-1 border-[#00000020] border-b pb-4">
          <h1 className="font-bold text-2xl pb-3">Explore</h1>
          <ul className="font-medium flex flex-col gap-4">
            <li className="flex gap-3">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
              </svg>{" "}
              Trending{" "}
            </li>
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
        <div className="pl-10 pb-24">
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

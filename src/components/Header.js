import React from "react";
import youtubelogo from "./youtube-5702763.png";
const Header = () => {
  return (
    <div className="flex justify-between  shadow-md items-center">
      {/* {hamburger @ logo section} */}
      <div className="flex  relative left-6">
        <div className="relative top-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="40"
            viewBox="0 0 32 32"
          >
            <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
          </svg>
        </div>
        <div className="w-28 relative top-1">
          <img src={youtubelogo} alt="" />
        </div>
      </div>

      <div className="   ">
        <div className="  flex justify-center items-center  ">
          <form action="">
            <input
              className=" w-[550px] text-white bg-[#4f4f4f] shadow-2xl outline-none px-3 py-3 rounded-l-full "
              type="text"
              placeholder="Search"
            />
            <button className="px-5 py-3 shadow-2xl bg-[#302f2f] rounded-r-full border ">
              🔍
            </button>
          </form>

          <div></div>
        </div>
      </div>

      <div className="w-10 relative right-20">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

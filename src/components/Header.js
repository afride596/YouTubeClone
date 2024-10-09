import React from "react";
import youtubelogo from "./youtube-667451_1920.png";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Appslice";
const Header = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const dispatch=useDispatch()

  const handleTooglesidebar=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex justify-between fixed w-screen   bg-white top-0   items-center z-10 h-32">
        {/* {hamburger @ logo section} */}
        <div className="flex  relative left-5 gap-4 ">
          <div className="relative -top-6 cursor-pointer " onClick={()=>handleTooglesidebar()}>
            <svg className="hover:bg-slate-100 "
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <path d="M 4 7 L 4 9 L 28 9 L 28 7 L 4 7 z M 4 15 L 4 17 L 28 17 L 28 15 L 4 15 z M 4 23 L 4 25 L 28 25 L 28 23 L 4 23 z"></path>
            </svg>
          </div>
          <div className="w-20 relative -top-7 object-cover">
            <img src={youtubelogo} alt="" />
          </div>
        </div>

        <div className="  relative -top-7 shadow-2xl rounded-l-full  rounded-r-full outline-none border border-gray-300 ">
          <div className="  flex justify-center items-center  ">
            <form action="">
              <input
                className=" w-[550px] text-black font-medium bg-[#f6f5f5] shadow-2xl  outline-none px-3 py-3 rounded-l-full "
                type="text"
                placeholder="Search"
              />
              <button className="px-5 py-3 shadow-2xl bg-[#141414]  rounded-r-full border ">
                🔍
              </button>
            </form>

            <div></div>
          </div>
        </div>

        <div className="w-10 -top-6 relative right-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt=""
          />
        </div>
      </div>
      <div className=" relative  left-56 z-10">
        <ButtonList />
      </div>
    </div>
  );
};

export default Header;

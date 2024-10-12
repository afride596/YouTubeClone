import React, { useEffect, useState } from "react";
import youtubelogo from "./youtube-667451_1920.png";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Appslice";
import { useRef } from "react";
import { cacheResult } from "../utils/SearchSlice";
import { YOUTUBE_SEARCH_API, YOUTUBE_VEDIOS_API } from "../utils/constants";
const Header = () => {
  const searchcache = useSelector((store) => store.search);
  const inputvalue = useRef();
  const [search, setsearch] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const [isClicked, setIsClicked] = useState(true);

  const dispatch = useDispatch();
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleinputvalue = () => {
    setsearch(inputvalue.current.value);
  };
  useEffect(() => {
    // making api call after every key press
    // but if the differemce between 2 api calls is <200ms
    //decline the api calls

    const timer = setTimeout(() => {
      if (searchcache[search]) setsuggestions(searchcache[search]);
      else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const getSearchSuggestion = async () => {
    console.log(search);
    const response = await fetch(YOUTUBE_SEARCH_API + search);
    const data = await response.json();
    console.log(data[1]);
    setsuggestions(data[1]);
    dispatch(
      cacheResult({
        [search]: data[1],
      })
    );
  };
  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleTooglesidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex justify-between fixed w-screen   bg-white top-0   items-center z-10 h-32">
        {/* {hamburger @ logo section} */}
        <div className="flex  relative left-5 gap-4 ">
          <div
            className="relative -top-6 cursor-pointer "
            onClick={() => handleTooglesidebar()}
          >
            <svg
              className="hover:bg-slate-100 "
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

        <div>
          <div className="  relative -top-1 shadow-2xl rounded-l-full  rounded-r-full outline-none border border-gray-300">
            <input
              ref={inputvalue}
              className={` w-[550px]   text-black font-medium bg-[#f6f5f5] shadow-2xl px-8 outline-blue-400 py-3 rounded-l-full  `}
              type="text"
              placeholder="Search"
              onChange={handleinputvalue}
              onClick={handleClick}
              onFocus={() => setshowsuggestions(true)}
              onBlur={() => setshowsuggestions(false)}
            />
            <button className="px-8 py-3 shadow-2xl bg-[#141414]  rounded-r-full border ">
              🔍
            </button>
          </div>
          {showsuggestions && (
            <div className="fixed z-50 bg-white ml-3 shadow-2xl w-[34rem] rounded-xl">
              <ul className="">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className=" cursor-pointer hover:bg-[#cedde2] hover:text-black px-5 py-1"
                  >
                    🔍 {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-10 -top-6 relative right-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt=""
          />
        </div>
      </div>
      {/* <div className=" relative  left-56 z-10">
        <ButtonList />
      </div> */}
    </div>
  );
};

export default Header;

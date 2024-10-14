import React, { useEffect, useState } from "react";
import youtubelogo from "./youtube-667451_1920.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/Appslice";
import { useRef } from "react";
import { cacheResult } from "../utils/SearchSlice";
import {
  YOUTUBE_SEARCH_API,
  YOUTUBE_SEARCH_RESULT,
  YOUTUBE_VEDIOS_API,
} from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import ButtonList from "./ButtonList";

const Header = () => {
  const navigate = useNavigate();
  const searchcache = useSelector((store) => store.search);
  const inputvalue = useRef();
  const [search_query, setsearch_query] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);

  const [isClicked, setIsClicked] = useState(true);
  // console.log(suggestions);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);

  const dispatch = useDispatch();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const handleinputvalue = () => {
    setsearch_query(inputvalue.current.value);
  };
  const handleSuggestionSelect = (suggestion) => {
    setsearch_query(suggestion);
  };
  useEffect(() => {
    // making api call after every key press
    // but if the differemce between 2 api calls is <200ms
    //decline the api calls

    const timer = setTimeout(() => {
      if (searchcache[search_query]) setsuggestions(searchcache[search_query]);
      else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [search_query]);

  const getSearchSuggestion = async () => {
    // console.log(search);
    const response = await fetch(YOUTUBE_SEARCH_API + search_query);
    const data = await response.json();
    // console.log(data[1]);
    setsuggestions(data[1]);
    dispatch(
      cacheResult({
        [search_query]: data[1],
      })
    );
  };

  // const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const handleTooglesidebar = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" flex flex-col justify-center ">
      <div className="flex justify-between fixed w-screen    bg-white top-0   items-center h-20 ">
        {/* {hamburger @ logo section} */}
        <div className="flex  relative left-5 gap-4 ">
          <div
            className="relative top-5 cursor-pointer "
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
          <div className="w-24 relative top-3 object-cover">
            <img src={youtubelogo} alt="" />
          </div>
        </div>

        <div>
          <div className="  relative top-3 rounded-l-full  rounded-r-full outline-none border border-gray-300">
            <input
              ref={inputvalue}
              className={` w-[550px]   text-black font-medium bg-[#f6f5f5]  px-8 outline-blue-400 py-3 rounded-l-full  `}
              type="text"
              placeholder="Search"
              onChange={handleinputvalue}
              onClick={() => handleClick()}
              onFocus={() => setshowsuggestions(true)}
              onBlur={() => setTimeout(() => setshowsuggestions(false), 200)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  // Navigate to the search results page
                  navigate(`/results/${encodeURIComponent(search_query)}`);
                  setshowsuggestions(false);
                } else if (event.key === "ArrowDown") {
                  if (activeSuggestionIndex < suggestions.length - 1) {
                    setActiveSuggestionIndex(activeSuggestionIndex + 1);
                  }
                } else if (event.key === "ArrowUp") {
                  if (activeSuggestionIndex > 0) {
                    setActiveSuggestionIndex(activeSuggestionIndex - 1);
                  }
                }
              }}
            />

            <Link to={`/results/${encodeURIComponent(search_query)}`}>
              <button className="px-8 py-3 shadow-2xl bg-[#141414]  rounded-r-full border ">
                🔍
              </button>
            </Link>
          </div>
          {showsuggestions && (
            <div className="fixed z-50 bg-white ml-3 shadow-2xl w-[34rem] rounded-xl">
              <ul className="">
                {suggestions.map((suggestion, index) => (
                  <Link
                    to={`/results/${encodeURIComponent(suggestion)}`}
                    onClick={() => handleSuggestionSelect(suggestion)}
                  >
                    <li
                      className=" cursor-pointer hover:bg-[#cedde2]
                  hover:text-black px-5 py-1"
                    >
                      🔍
                      {suggestion}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-10 top-2 relative right-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt=""
          />
        </div>
      </div>
    
    </div>
  );
};

export default Header;

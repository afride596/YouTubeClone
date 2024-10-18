import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT } from "../utils/constants";
import Resultvideo from "./search/Resultvideo";

import { useDispatch } from "react-redux";
import { toggleHome } from "../utils/Appslice";

const Searchresults = () => {
  // if (!searchresult) return;
  const param = useParams();
  const dispatch = useDispatch();

  // console.log(param.query);
  useEffect(() => {
    searchresults(param.query);
    dispatch(toggleHome());
  }, [param]);

  const [searchresult, setsearchresult] = useState([]);
  // console.log(searchresult);

  const searchresults = async (searchQuery) => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_RESULT(searchQuery));
      const data = await response.json();
      // console.log(data);
      setsearchresult(data.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="text-black fixed left-80  border   top-20 overflow: visible -z-10    ">
      <div className="h-screen w-screen overflow-scroll">
        {searchresult.map((search) => (
          <Link to={"/watch/" + search.id.videoId}>
            <Resultvideo search={search} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Searchresults;

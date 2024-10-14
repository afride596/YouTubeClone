import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { YOUTUBE_SEARCH_RESULT } from "../utils/constants";
import Resultvideo from "./search/Resultvideo";

const Searchresults = () => {
  const param = useParams();

  // console.log(param.query);
  useEffect(() => {
    searchresults(param.query);
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
  // if (!searchresult) return;

  return (
    <div className="text-black relative  top-32 left-36  h-screen w-screen flex flex-col overflow-scroll  gap-4 ">
     { searchresult.map((search)=>(
      <Link  to={"/watch/"+search.id.videoId } >
      <Resultvideo search={search} />
      
      </Link>
      ))
    }
    </div>
  );
};

export default Searchresults;

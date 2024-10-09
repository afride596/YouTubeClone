import React, { useEffect, useState } from "react";
import Videocards from "./Videocards";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getvideo();
  }, []);
  const getvideo = async () => {
    const data = await fetch(YOUTUBE_VEDIOS_API);
    const json = await data.json();
    setvideos(json.items);

    // console.log(json);
  };
  return (

    <div className={ `flex flex-wrap gap-6 p-5 pt-20  h-screen overflow-scroll   `}>
      {videos.map((video) => (
        <Link to={"/watch/"+video.id }><Videocards key={video.id} item={video} /></Link>
      ))}
    </div>

  );
};

export default VideoContainer;

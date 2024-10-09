import React, { useEffect, useState } from "react";
import Videocards from "./Videocards";
import { YOUTUBE_VEDIOS_API } from "../utils/constants";

const VideoContainer = () => {
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
    <div className="flex flex-wrap gap-6 p-5">
      {videos.map((video) => (
        <Videocards item={video} />
      ))}
    </div>
  );
};

export default VideoContainer;

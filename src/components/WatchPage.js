import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/Appslice";
import { removeButtonList } from "../utils/Appslice";
import { useLocation, useParams } from "react-router-dom";
import SideBarsmall from "./SideBarsmall";
import ButtonList from "./ButtonList";
import { YOUTUBE_SELECTE_VIDEO_API } from "../utils/constants";
import { addVideo, removeVideo } from "../utils/VideoSlice";
import VideoContent from "./VideoContent";
const WatchPage = () => {
  const issidebar = useSelector((store) => store.app.issidebar);
  const dispatch = useDispatch();
  const params = useParams();
  const [video, setvideo] = useState();
  // console.log(params);
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(removeButtonList());

    YOUTUBE_SELECT(params.id);
  }, []);

  const YOUTUBE_SELECT = async (id) => {
    try {
      const response = await fetch(YOUTUBE_SELECTE_VIDEO_API(id));
      const data = await response.json();
      console.log();
      setvideo(data.items[0]);
    } catch (err) {
      console.log("error" + err);
    }
  };

  return (
    <div className="  h-screen w-screen overflow-y-scroll overflow-x-hidden   ">
      <div className="  mt-28  ">
        <iframe
          className="object-cover rounded-xl  ml-20  "
          width="1200 "
          height="620"
          src={"https://www.youtube.com/embed/" + params.id}
          title="YouTube video player"
          FrameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <VideoContent videoData={video} />
    </div>
  );
};

export default WatchPage;

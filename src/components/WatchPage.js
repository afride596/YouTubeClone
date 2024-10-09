import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/Appslice";
import { useLocation, useParams } from "react-router-dom";
import SideBarsmall from "./SideBarsmall";
const WatchPage = () => {

  const params = useParams();
  console.log(params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

     return (
    <div className="object-cover relative left-2">
  

      <iframe className="object-cover"
        width="1200"
        height="700"
        src={"https://www.youtube.com/embed/" + params.id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;

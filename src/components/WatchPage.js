import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/Appslice";
import { removeButtonList } from "../utils/Appslice";
import { useLocation, useParams } from "react-router-dom";
import SideBarsmall from "./SideBarsmall";
import ButtonList from "./ButtonList";
const WatchPage = () => {
  const issidebar = useSelector((store) => store.app.issidebar);
  const params = useParams();
  // console.log(params);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    dispatch(removeButtonList());
  }, []);
  return (
    <div className="object-cover ">
      <div className="relative left-28  top-20 ">
        <iframe
          className="object-cover rounded-xl "
          width="1240 "
          height="700"
          src={"https://www.youtube.com/embed/" + params.id}
          title="YouTube video player"
          FrameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default WatchPage;

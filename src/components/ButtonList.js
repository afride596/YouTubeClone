import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";
import { removeButtonList } from "../utils/Appslice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const ButtonList = () => {


  const dispatch = useDispatch();
  const issidebar = useSelector((store) => store.app.issidebar);
  const [buttonlist, setbuttonlist] = useState(issidebar);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  useEffect(() => {
    // dispatch(removeButtonList())
    setbuttonlist(true)
  }, []);
  const list = [
    "All",
    "Gaming",
    "React Router",
    "Live",
    "Music",
    "Apple",
    "FeaturePhone",
    "Laptops",
    "Thrillers",
    "GameShows",
    "Prabhas",
    "Allu Arjun",
    "Recently upload",
    "Mixes",
    "New",
  ];
  if(!issidebar){
    return ""
  }
  return(
         {issidebar} &&  (<div className={`${
          isMenuOpen
            ? "flex gap-2 justify-center items-center   absolute  top-1"
            : "flex gap-2  justify-center  items-center absolute  top-1"
        }`}
      >
        {list.map((list) => (
          <Button name={list} key={list} />
        ))}
      </div>
    )
  
  )
};

export default ButtonList;

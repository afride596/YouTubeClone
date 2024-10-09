import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ButtonList = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  const list = [
    "All",
    "Gaming",
    "Telugu cinema",
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
  return (
    <div className={ `${isMenuOpen?'flex gap-2  ml-10 my-2 fixed  top-16':'flex gap-2  -ml-32 my-2 fixed  top-16'}` }>
      {list.map((list) => (
        <Button name={list} key={list} />
      ))}
    </div>
  );
};

export default ButtonList;

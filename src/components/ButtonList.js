import React from "react";
import Button from "./Button";

const ButtonList = () => {
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
    <div className="flex gap-2  ml-10 my-2 ">
      {list.map((list) => (
        <Button name={list} key={list} />
      ))}
    </div>
  );
};

export default ButtonList;

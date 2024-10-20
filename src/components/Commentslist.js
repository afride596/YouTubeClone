import React, { useEffect, useState } from "react";
import { YOUTUBE_COMMENTS } from "../utils/constants";
import Comments from "./Comments";
const Commentslist = ({ id }) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchcomment(id);
  }, [id]);
  const fetchcomment = async (ids) => {
    const response = await fetch(YOUTUBE_COMMENTS(id));
    const data = await response.json();
    console.log(data);

    // console.log(data.items);
    setdata(data.items);
  };

  return (
    <div>
      {data.map((eachdata) => {
        return <Comments key={eachdata.id} data={eachdata} />;
      })}
      {/* <Comments data={data} /> */}
    </div>
  );
};

export default Commentslist;

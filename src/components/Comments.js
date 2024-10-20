import React from "react";
import { timeAgo } from "../utils/constants";
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { formatViews } from "../utils/constants";

const Comments = ({ data }) => {
  if (!data || !data.snippet) return null;
  const { snippet } = data;
  const { channelId, topLevelComment } = snippet;
  const {
    authorChannelId,
    authorDisplayName,
    authorProfileImageUrl,
    textDisplay,
    videoId,
    likeCount,
    publishedAt,
  } = topLevelComment.snippet;

  //   console.log(snippet);
  return (
    <div className="flex p-5 gap-5">
      <div>
        <img className="rounded-full" src={authorProfileImageUrl} alt="" />
      </div>
      <div>
        <div className="flex gap-2 items-center">
          <h4 className="text-lg font-semibold">{authorDisplayName}</h4>
          <p className="text-sm text-gray-500">{timeAgo(publishedAt)}</p>
        </div>
        <p className="w-[1060px]">{textDisplay}</p>
        <p className="flex items-center gap-2 mt-2">
          {" "}
          <SlLike /> {formatViews(likeCount)}
          <div className="ml-4">
            <SlDislike />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Comments;

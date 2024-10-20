import React from "react";

const Resultvideo = ({ search }) => {
  if (!search) return;
  const timeAgo = (dateString) => {
    const date = new Date(dateString); // Convert input string to Date object
    const now = new Date(); // Get the current date and time
    const diffInSeconds = Math.floor((now - date) / 1000); // Time difference in seconds

    // Define simpler time intervals in seconds
    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = 2592000;
    const secondsInYear = 31536000;

    // Check time difference and return appropriate message
    if (diffInSeconds < secondsInMinute) {
      return "Just now"; // Less than 1 minute ago
    } else if (diffInSeconds < secondsInHour) {
      const minutes = Math.floor(diffInSeconds / secondsInMinute);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInDay) {
      const hours = Math.floor(diffInSeconds / secondsInHour);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInMonth) {
      const days = Math.floor(diffInSeconds / secondsInDay);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < secondsInYear) {
      const months = Math.floor(diffInSeconds / secondsInMonth);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffInSeconds / secondsInYear);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };
  const { snippet } = search;
  const {
    channelId,
    channelTitle,
    thumbnails,
    title,
    publishedAt,
    publishTime,
    description,
  } = snippet;
  // console.log(snippet);

  return (
    <div className="  ">
      <div className="flex gap-4  ">
        <div className="">
          <img
            className="w-[480px] h-[270px] rounded-lg  object-cover"
            src={thumbnails?.high?.url}
            alt=""
          />
        </div>
        <div className="w-[800px ]  ">
          <h2 className="text-xl font-medium">{title}</h2>
          <div className="flex gap-1 mt-4">
            <span>{channelTitle}</span>
            <span>•</span>
            <span>{timeAgo(publishTime)}</span>
          </div>
          <h1 className="mt-3 text-gray-600">
            {description.split(" ").length <= 20
              ? description // If less than or equal to 20 words, show full description
              : description.split(" ").slice(0, 20).join(" ") + "..."}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Resultvideo;

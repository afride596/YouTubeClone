import React from "react";
import { useSelector } from "react-redux";

const Videocards = ({ item }) => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if (!item) return;
  console.log(item);

  const { snippet, statistics } = item;
  const { thumbnails, channelTitle, publishedAt, localized } = snippet;
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
  const formatViews = (viewCount) => {
    const views = parseInt(viewCount); // Convert viewCount to a number
    if (views >= 1000000) {
      return (views / 1000000).toFixed(0) + "M views";
    } else if (views >= 1000) {
      return (views / 1000).toFixed(0) + "K views";
    } else {
      return views + " views";
    }
  };
  return (
    <div className={ `  ${!isMenuOpen ? ' relative -z-20 left-10 rounded-lg cursor-pointer hover:bg-gray-100':'rounded-lg cursor-pointer  hover:bg-gray-100 ' }`}>
      <div className="" >
        <img   className={`  h-52 object-cover ${!isMenuOpen ? '  relative w-[430px]  rounded-xl':'w-96 rounded-xl'}`} src={thumbnails.high.url} alt="" />
      </div>
      <div className="py-4">
        <h3 className="font-semibold  text-lg w-96 break-words ">{localized.title}</h3>
        <span>{channelTitle}</span>
        <div className="flex text-[#818181] gap-2 items-center">
          <span>{formatViews(statistics.viewCount)}</span>
          <span>•</span>
          <p>{timeAgo(publishedAt)}</p>
        </div>
      </div>
    </div>
  );
};

export default Videocards;

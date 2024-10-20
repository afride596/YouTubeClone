const GOOGEL_API_KEY = "AIzaSyD_ru7tPClsoMjoUs3FW94anvdaW9hwSKw";
// const GOOGEL_API_KEY = "AIzaSyBIh1091tGeZaLfQ7OOG2Iye6W5v8R_Qa4";
// const GOOGEL_API_KEY = "AIzaSyA2s0BSJZNwMDdmvS8MUvVHbf38oy30DbA";
export const YOUTUBE_VEDIOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGEL_API_KEY;
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// export const YOUTUBE_SEARCH_API =
//   "https://cors-proxy-wine-one.vercel.app/api/cors-proxy?query=";
export const YOUTUBE_SEARCH_RESULT = (searchQuery) =>
  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${GOOGEL_API_KEY}`;

export const YOUTUBE_SELECTE_VIDEO_API = (id) =>
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key= 
    ${GOOGEL_API_KEY}`;
export const YOUTUBE_COMMENTS = (id) =>
  `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${id}&key=${GOOGEL_API_KEY}`;

export const formatViews = (viewCount) => {
  const views = parseInt(viewCount); // Convert viewCount to a number
  if (views >= 1000000) {
    return (views / 1000000).toFixed(0) + "M views";
  } else if (views >= 1000) {
    return (views / 1000).toFixed(0) + "K views";
  } else {
    return views + " views";
  }
};

export const timeAgo = (dateString) => {
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

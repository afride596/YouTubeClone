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

import React, { useState } from "react";

const VideoContent = ({ videoData }) => {
  const [des, setdes] = useState(false);
  if (!videoData) return;
  // console.log(videoData);

  const { snippet, statistics } = videoData;
  // console.log(snippet);

  const {
    publishedAt,
    channelId,
    title,
    description,
    channelTitle,
    tags,
    localized,
  } = snippet;
  console.log(description);

  const { viewCount, likeCount, commentCount } = statistics;
  const renderDescription = (text) => {
    // Regular expression to find URLs in the text
    const urlPattern = /(https?:\/\/[^\s]+)/g;

    // Split the text by the URL pattern and map over the parts
    const parts = text.split(urlPattern);
    return parts.map((part, index) => {
      // If the part matches the URL pattern, render it as a link
      if (urlPattern.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue" }}
          >
            {part}
          </a>
        );
      }
      // Otherwise, render the part as plain text
      return (
        <span key={index}>
          {part.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </span>
      );
    });
  };
  const toggleDescription = () => {
    setdes(!des);
  };

  return (
    <div className="relative left-24 z-10 ">
      <div>
        <h2 className="text-xl font-medium">{title}</h2>
      </div>
      <div className=" flex gap-60 mt-5 relative left-5 mb-5">
        <div className="channeldetails flex  ">
          <img src="" alt="" />
          <div>
            <div className="font-medium text-lg">{channelTitle}</div>
            <div>
              <span className="text-sm">122k subscribers</span>
            </div>
          </div>
          <div className="ml-24">
            <button
              className="bg-[#181818] text-white rounded-full px-8 py-4"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="cout  text-white bg-[#4c4949] rounded-full   flex justify-center items-center cursor-pointer ">
          <div className="flex gap-6">
            <div className="flex gap-4">
              <div className="w-5 ml-4">
                <svg
                  className="invert"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="thumbs-up"
                >
                  <path d="M7.5 23.501h-7a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5zm-6.5-1h6v-11H1v11z"></path>
                  <path d="M19.75 22.501H10.5c-.925 0-2.605-.398-3.354-1.146a.5.5 0 0 1 .707-.707c.473.473 1.834.854 2.646.854h9.25c.689 0 1.25-.561 1.25-1.25 0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.249 1.249 0 0 0 22 17.251c0-.344-.14-.666-.395-.907a.499.499 0 0 1 .286-.859A1.247 1.247 0 0 0 23 14.251c0-.466-.262-.89-.684-1.106a.497.497 0 0 1-.034-.87c.449-.278.718-.754.718-1.274 0-.827-.673-1.5-1.5-1.5h-7a.502.502 0 0 1-.468-.677c.01-.027.968-2.564.968-4.323 0-1.637-1.452-3-2-3-.431 0-.792.157-1 .272v3.228a.501.501 0 0 1-.046.209l-3 6.5a.506.506 0 0 1-.23.238l-1 .5a.5.5 0 0 1-.447-.895l.843-.421L11 4.891v-3.39c0-.152.069-.295.188-.391A3.13 3.13 0 0 1 13 .501c1.157 0 3 1.831 3 4 0 1.368-.49 3.071-.795 4H21.5c1.378 0 2.5 1.122 2.5 2.5 0 .631-.235 1.223-.65 1.675.411.413.65.974.65 1.575a2.24 2.24 0 0 1-1.235 2 2.24 2.24 0 0 1-1 3 2.253 2.253 0 0 1-2.015 3.25z"></path>
                </svg>
              </div>
              <div>{likeCount}</div>
              <div>|</div>
            </div>
            <div className="mr-7 w-5 invert flex justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="thumbs-down"
              >
                <path d="M7.5 13.5h-7A.5.5 0 0 1 0 13V1A.5.5 0 0 1 .5.5h7A.5.5 0 0 1 8 1v12a.5.5 0 0 1-.5.5zm-6.5-1h6v-11H1v11z"></path>
                <path d="M13 23.5c-1.038 0-1.781-.584-1.813-.609A.502.502 0 0 1 11 22.5v-3.39l-2.881-6.241-.843-.421a.5.5 0 0 1 .447-.895l1 .5a.497.497 0 0 1 .23.238l3 6.5A.487.487 0 0 1 12 19v3.228c.207.115.569.272 1 .272.548 0 2-1.363 2-3 0-1.759-.958-4.297-.967-4.322a.5.5 0 0 1 .467-.677h7c.827 0 1.5-.673 1.5-1.5 0-.52-.269-.996-.719-1.273a.502.502 0 0 1 .034-.87c.423-.218.685-.642.685-1.108 0-.631-.477-1.161-1.108-1.233a.498.498 0 1 1-.287-.859c.254-.241.395-.564.395-.908 0-.631-.477-1.161-1.108-1.233a.499.499 0 1 1-.287-.859c.254-.241.395-.564.395-.908 0-.689-.561-1.25-1.25-1.25H10.5c-.812 0-2.173.381-2.646.854a.5.5 0 0 1-.707-.707C7.896 1.899 9.575 1.5 10.5 1.5h9.25a2.253 2.253 0 0 1 2.015 3.25 2.239 2.239 0 0 1 1 3 2.239 2.239 0 0 1 .586 3.575c.414.453.649 1.044.649 1.675 0 1.378-1.121 2.5-2.5 2.5h-6.296c.306.929.796 2.632.796 4 0 2.17-1.843 4-3 4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------- */}
      <div className=" z-50  desscription w-[1200px] bg-[#dbd8d8] relative  px-5 py-8 rounded-xl  text-black bg-[]">
        <p className="text-base">
          {des
            ? renderDescription(description)
            : description.split("").slice(0, 97).join("") + "..........."}
        </p>
        <button onClick={toggleDescription} className="text-gray-900 mt-2">
          {des ? "showless" : "show more"}
        </button>
      </div>
      <h1 className="text-black text-xl font-semibold mt-8">
        {commentCount + "      Comments "}
      </h1>
    </div>
  );
};

export default VideoContent;

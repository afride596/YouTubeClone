import { createSlice } from "@reduxjs/toolkit";

const VideoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideo: (state, action) => {
      state.push(action.payload);
    },
    removeVideo: (state, action) => {
        state = state.filter((video) => video.id !== action.payload);
        },
  },
});
export const { addVideo,removeVideo } = VideoSlice.actions;
export default VideoSlice.reducer;

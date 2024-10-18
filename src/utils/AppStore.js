import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice";
import SearchSlice from "./SearchSlice";
import VideoSlice from "./VideoSlice";
const AppStore = configureStore({
  reducer: {
    app: Appslice,
    search: SearchSlice,
    video: VideoSlice,
  },
});
export default AppStore;

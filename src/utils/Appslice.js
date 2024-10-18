import { createSlice } from "@reduxjs/toolkit";

const Appslice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    issidebar: true,
    searchpage: true,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    removeButtonList: (state, action) => {
      state.issidebar = false;
    },
    toggleHome: (state) => {
      state.searchpage = !state.searchpage;
    },
  },
});
export const { toggleMenu, closeMenu, removeButtonList, toggleHome } =
  Appslice.actions;
export default Appslice.reducer;

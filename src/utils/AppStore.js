import { configureStore } from "@reduxjs/toolkit";
import Appslice from "./Appslice"
const AppStore=configureStore({
reducer:{
app:Appslice
}
})
export default AppStore;
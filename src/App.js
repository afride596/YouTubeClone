import "./index.css";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Searchresults from "./components/Searchresults";
import Header from "./components/Header";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch/:id",
        element: <WatchPage />,
      },
      {
        path: "/results/:query",
        element: <Searchresults />,
      },
      {
        path: "/results/:suggestion",
        element: <Searchresults />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={AppStore}>
      <div className="App fixed">
        <RouterProvider router={appRouter}>
        <Body />
        </RouterProvider>
      </div>
    </Provider>
  );
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import Add from "../page/Add";
import Home from "../page/Home";
import Edit from "../page/Edit";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Add/:id",
    element: <Add />,
  },

  {},
]);
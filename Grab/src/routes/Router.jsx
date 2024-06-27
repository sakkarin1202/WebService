import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import Add from "../page/Add.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
]);

export default router;

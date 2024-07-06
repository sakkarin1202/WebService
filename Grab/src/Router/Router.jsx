import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx"
import Add from "../page/Add.jsx"
import Edit from "../page/Edit.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  }
]);

export default router;
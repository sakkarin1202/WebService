import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import Add from "../page/Add.jsx";
import Edit from "../page/Edit.jsx";
import Login from "../page/Login.jsx";
import Register from "../page/Register.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/add",
    element: <Add />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

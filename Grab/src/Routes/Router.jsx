import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home.jsx";
import Add from "../page/Add.jsx";
import Edit from "../page/Edit.jsx";
import Login from "../page/Login.jsx";
import Register from "../page/Register.jsx";
import Layout from "../Component/Layout.jsx";
import AdminLayout from "../Component/AdminLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      {
        path: "users",
        element: <div>dashboard</div>,
      },
    ],
  },
]);

export default router;

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import OrderPage from "./pages/OrderPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OrderPage/>,
  },
  {
    path:'/login',
    element: <LoginPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Account from "../pages/account";
import Profile from "../pages/profile";
import Bookings from "../pages/bookings";
import Places from "../pages/places";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/account",
        element: <Account></Account>,
        children: [
          {
            path: "",
            element: <Profile></Profile>,
          },
          {
            path: "bookings",
            element: <Bookings></Bookings>,
          },
          {
            path: "accommodation",
            element: <Places></Places>,
          },
        ],
      },
    ],
  },
]);

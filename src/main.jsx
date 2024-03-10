import RootLayout from "./RootLayout"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Quiz from "./Quizzes/Quiz";
import Start from "./Start/Start"
import Membership from "./Membership/Membership";
import "./index.css"
import ErrorPage from "./404/ErrorPage";
import Leaderboards from "./Leaderboards/Leaderboards";
import Login from "./Login/Login";
import Success from "./Login/Success";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/start", element: <Start /> },
      { path: "/membership", element: <Membership /> },
      { path: "/leaderboards", element: <Leaderboards /> },
      { path: "/login", element: <Login /> },
      { path: '*', element: <ErrorPage /> },
      { path: 'success', element: <Success /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

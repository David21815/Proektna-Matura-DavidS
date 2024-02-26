import RootLayout from "./RootLayout"
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Quiz from "./Quizzes/Quiz";
import Start from "./Start/Start"
import Membership from "./Membership/Membership";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/start", element: <Start /> },
      { path: "/membership", element: <Membership /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

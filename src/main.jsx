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
import TestCard from "./Login/TestCard";
import TechQuiz from "./Quizzes/TechQuiz";
import SportsQuiz from "./Quizzes/SportsQuiz";
import NatureQuiz from "./Quizzes/NatureQuiz";
import TestQuiz from "./Quizzes/TestQuiz";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfCondition from "./TermsOfCondition/TermsOfCondition";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/tech-quiz", element: <TechQuiz /> },
      { path: "/sports-quiz", element: <SportsQuiz /> },
      { path: "/nature-quiz", element: <NatureQuiz /> },
      { path: "/test-quiz", element: <TestQuiz /> },
      { path: "/start", element: <Start /> },
      { path: "/membership", element: <Membership /> },
      { path: "/leaderboards", element: <Leaderboards /> },
      { path: "/login", element: <Login /> },
      { path: '*', element: <ErrorPage /> },
      { path: 'success', element: <Success /> },
      { path: 'testcard', element: <TestCard /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/terms-of-condition', element: <TermsOfCondition /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

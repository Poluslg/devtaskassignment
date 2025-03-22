import { lazy } from "react";
import { createBrowserRouter } from "react-router";

import App from "./App";

const LandingPage = lazy(() => import("./pages/Landing/LandingPage"));
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));
const SignupPage = lazy(() => import("./pages/Signup/SignupPage"));
const LoginPage = lazy(() => import("./pages/Login/LoginPage"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "", element: <LandingPage /> },
      { path: "*", element: <ErrorPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
]);

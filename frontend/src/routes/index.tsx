import type { RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Game from "../pages/Game";
import Leaderboard from "../pages/Leaderboard";

const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/game", element: <Game /> },
      { path: "/leaderboard", element: <Leaderboard /> },
    ],
  },
];

export default routes;

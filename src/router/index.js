import React from "react";
import { Redirect } from "react-router";
const Home = React.lazy(() => import('../pages/home/Home'))
const ScanExplorer = React.lazy(() => import('../pages/about/ScanExplorer'))
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/ScanExplorer',
    component: ScanExplorer
  }
];
export default routes
import React from "react";
import { Redirect } from "react-router";
const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/home" />,
  },
];
export default routes
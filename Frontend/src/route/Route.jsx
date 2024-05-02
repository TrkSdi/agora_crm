/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login-Page/Login/Login";
import Reset from "../components/Login-Page/Reset/Reset";
import Dashboard from "../components/Dashboard/Dashboard";
import Customer from "../components/Customer/Customer";
import Prospect from "../components/Prospect/Prospect";
import Sales from "../components/Sales/Sales";
import Delay from "../components/Delay/Delay";
import Calendar from "../components/Calendar/Calendar";
import Catalog from "../components/Catalog/Catalog";
import DeliveryTracking from "../components/DeliveryTracking/DeliveryTracking";
import Messenger from "../components/Messenger/Messenger";
import OrderTracking from "../components/OrderTracking/OrderTracking";
import Pipe from "../components/Pipe/Pipe";
import PurchaseTracking from "../components/PurchaseTracking/PurchaseTracking";
import Request from "../components/Request/Request";
import SalesTracking from "../components/SalesTracking/SalesTracking";
import Statistics from "../components/Statistics/Statistics";
import Supply from "../components/Supply/Supply";
import ToolBox from "../components/ToolBox/ToolBox";
import ProfilePage from "../components/Profile/Profile-Page/ProfilePage";

import Root from "../components/Root/Root";
import ErrorRoute from "../components/Error-Page/ErrorRoute";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/",
    element: (
      <div>
        <Root />
      </div>
    ),
    errorElement: <ErrorRoute />,
    children: [
      // Top SideBar
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customer",
        element: <Customer />,
      },
      {
        path: "prospect",
        element: <Prospect />,
      },
      {
        path: "sales",
        element: <Sales />,
      },
      {
        path: "late",
        element: <Delay />,
      },
      {
        path: "catalog",
        element: <Catalog />,
      },
      {
        path: "supply",
        element: <Supply />,
      },
      {
        path: "purchase-tracking",
        element: <PurchaseTracking />,
      },
      {
        path: "order-tracking",
        element: <OrderTracking />,
      },
      {
        path: "delivery-tracking",
        element: <DeliveryTracking />,
      },
      {
        path: "sales-tracking",
        element: <SalesTracking />,
      },
      {
        path: "request",
        element: <Request />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      // Bottom SideBar
      {
        path: "pipe",
        element: <Pipe />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "messenger",
        element: <Messenger />,
      },
      {
        path: "toolbox",
        element: <ToolBox />,
      },
      // Profile
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

export default router;

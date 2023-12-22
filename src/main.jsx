import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './AuthProvider/AuthProvider';
import MainLayout from './MainComponent/MainLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home';
import Login from './Components/Login';
import DashHome from './DashBoard/DashHome';
import Dashboard from './MainComponent/Dashboard';
import { Toaster } from 'react-hot-toast';
import Registetion from './Components/Registetion';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Profile from './DashBoard/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/registetion',
        element: <Registetion></Registetion>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },

  // dashboard
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute><DashHome></DashHome></PrivateRoute>,
      },
      {
        path: "/dashboard/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      }
    ],
  },
]);

const query = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={query}>
        <NextUIProvider>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <RouterProvider router={router} />
        </NextUIProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)

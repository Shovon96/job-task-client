import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {NextUIProvider} from '@nextui-org/react'
import MainLayout from './MainComponent/MainLayout';
import ErrorPage from './ErrorPage/ErrorPage';
import Home from './Pages/Home';
import Dashboard from './Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)

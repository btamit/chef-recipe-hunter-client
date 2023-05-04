import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Blog from './components/Blog'
import ErrorPage from './components/ErrorPage'
import ChefDetails from './components/ChefDetails'
import AuthProvider from './providers/AuthProvider'
import Login from './components/Login/Login/Login'
import Register from './components/Login/Register/Register'
import PrivateRoute from './components/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "chefs/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
);

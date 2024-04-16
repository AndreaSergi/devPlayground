import { useState } from 'react';
import { Login } from './Login/Login'
import { Register } from './Register/Register.jsx';

import {
  createBrowserRouter,
  Link,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { ProvaHome } from './ProvaHome.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <ProvaHome/>
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/pingpong",
    element: <div>PINGPONG GAME</div>
  },
  {
    path: "/tris",
    element: <div>TRIS GAME</div>
  },
  {
    path: "/wordify",
    element: <div>WORDIFY GAME</div>
  },
]);


export function AppLogin() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

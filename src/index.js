import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MohammadAlmattar from "./pages/mohammadAlmattar";
import Amir from "./pages/amir";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1 style={{color:"red"}}>fuck you</h1>,
  },

  {
    path: "/MohammadAlmattar",
    element: <MohammadAlmattar/>,
  },

  {
    path: "/Amir",
    element: <Amir/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

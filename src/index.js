import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App'
import { Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals'
import {store} from "./store"
import { Provider } from 'react-redux'
import Home from "./pages/home"
import AdminDashBoard from "./pages/adminDashBoard"
import Table from './pages/Table'
import Main from "././pages/main"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Artilce from './pages/Article'
import Login from './pages/logIn';
import ArtilcesControl from "./pages/artilcesControl"

const router = createBrowserRouter([


  { 
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/article/:id",
        element: <Artilce/>,
      },
      {
        path: "*",
        element: <Navigate to="./"/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path:"/",
        element:<Home/>
      },
      {
       
        path:"/admin",
        element:<AdminDashBoard/>,
        children:[
          {
            path:"",
            element:<Main/>
          },
          {
            path:"articles",
            element:<ArtilcesControl/>
          },
          
          {
            path:"users",
            element:<Table></Table>          
          },
          
          {
            path:"tags",
            element:<Table  ></Table>
          },
          {
            path:"comments",
            element:<Table ></Table>
          },
          {
            path:"messages",
            element:<Table  ></Table>
          }
        ]
      },
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

     <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

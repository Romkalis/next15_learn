import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from './App'
import './index.css'
import MainLayout from "./components/routes/MainLayout.jsx";

const routes = createBrowserRouter([
  {path: '/', element: <MainLayout />, children: [
      {path: '/', element: <App/>}
    ]},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)

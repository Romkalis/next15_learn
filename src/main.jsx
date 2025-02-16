import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Posts from './routes/Posts.jsx'
import './index.css'
import MainLayout from "./routes/MainLayout.jsx";
import NewPost from "./routes/NewPost.jsx";

const routes = createBrowserRouter([
  {
    path: '/', element: <MainLayout/>, children: [
      {
        path: '/', element: <Posts/>, children: [

          {path: '/create-post', element: <NewPost/>},
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)

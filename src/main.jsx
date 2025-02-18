import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Posts from './routes/Posts.jsx'
import './index.css'
import MainLayout from "./routes/MainLayout.jsx";
import NewPost from "./routes/NewPost.jsx";
import DemoPage1 from "./components/DemoPage1.jsx";
import DemoPage2 from "./components/DemoPage2.jsx";

const routes = createBrowserRouter([
  {
    path: '/', element: <MainLayout/>, children: [
      {
        path: '/', element: <Posts/>, children: [
          {
            path: '/create-post', element: <NewPost/>,
          }
        ]
      },
      {
        path: '/demo1', element: <DemoPage1/>
      },
      {
        path: '/demo2', element: <DemoPage2/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)

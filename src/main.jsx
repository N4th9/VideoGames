import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "/src/error-page";

import { loader as rootLoader, ReactHome} from"./routes/ReactHome.jsx"
import { GamePage } from "./routes/GamePage.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <ReactHome/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader
    },
    {
        path: "/game/:id",
        element: <GamePage/>,
        errorElement: <ErrorPage/>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
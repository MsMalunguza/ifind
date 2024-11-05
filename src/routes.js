import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./components/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },

    { path : "/SignUp",
        element: <SignUp/>

    }
])
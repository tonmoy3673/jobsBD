import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Main from "../Main/Main";
import AppliedJobs from "../Pages/AppliedJobs";
import JobDetails from "../Pages/JobDetails";

export const router= createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/job/:id',
                element:<JobDetails/>,
                loader:()=> fetch ('/data/jobs.json')
            },
            {
                path:'/applied',
                element:<AppliedJobs/>,
                loader:()=>fetch('/data/jobs.json')
            }
        ]
    },
    
])
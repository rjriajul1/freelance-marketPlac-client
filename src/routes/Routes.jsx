import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddTask from "../pages/addTask/AddTask";
import BrowseTasks from "../pages/browseTasks/BrowseTasks";
import MyPostedTasks from "../pages/myPostedTasks/MyPostedTasks";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../private/PrivateRoute";
import TaskDetails from "../pages/taskDetails/TaskDetails";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                hydrateFallbackElement:<p>loading...</p>,
                loader:()=> fetch('http://localhost:3000/recentTasks'),
                Component:Home
            },
            {
                path:'addTask',
                element: <PrivateRoute><AddTask></AddTask></PrivateRoute>
            },
            {
                path: 'browseTasks',
                hydrateFallbackElement:<p>loading...</p>,
                loader: ()=> fetch('http://localhost:3000/allTasks'),
                Component:BrowseTasks
            },
            {
                path:'myPostedTasks',
                element: <PrivateRoute><MyPostedTasks></MyPostedTasks></PrivateRoute>
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'signUp',
                Component:SignUp
            },
            {
                path:'profile',
                Component:Profile
            },
            {
                path:'taskDetails/:id',
                element:<PrivateRoute><TaskDetails></TaskDetails></PrivateRoute>
            }
        ]
    }
])
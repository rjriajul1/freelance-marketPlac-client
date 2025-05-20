import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddTask from "../pages/addTask/AddTask";
import BrowseTasks from "../pages/browseTasks/BrowseTasks";
import MyPostedTasks from "../pages/myPostedTasks/MyPostedTasks";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";


export const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'addTask',
                Component:AddTask
            },
            {
                path: 'browseTasks',
                Component:BrowseTasks
            },
            {
                path:'myPostedTasks',
                Component:MyPostedTasks
            },
            {
                path:'login',
                Component:Login
            },
            {
                path:'signUp',
                Component:SignUp
            }
        ]
    }
])
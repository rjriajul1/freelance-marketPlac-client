import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import AddTask from "../pages/addTask/AddTask";
import MyPostedTasks from "../pages/myPostedTasks/MyPostedTasks";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "../private/PrivateRoute";
import TaskDetails from "../pages/taskDetails/TaskDetails";
import UpdateTask from "../pages/updateTask/UpdateTask";
import Error from "../error/Error";
import Navbar from "../components/header/Navbar";
import Bids from "../pages/bids/Bids";
import AllItems from "../pages/AllItems/AllItems";
import DashboardLayout from "../layout/DashboardLayout";
import About from "../pages/aboutUs/AboutUs";
import PrivacyPolicy from "../components/privacyPolicy/PrivacyPolicy";
import ContactUs from "../components/contactUs/ContactUs";
import Statistics from "../pages/statistics/Statistics";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: (
      <div>
        <Navbar />
        <Error></Error>
      </div>
    ),
    children: [
      {
        index: true,
        hydrateFallbackElement: <p>loading...</p>,
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-omega.vercel.app/recentTasks"
          ),
        Component: Home,
      },
      {
        path: "allItems",
        hydrateFallbackElement: <p>loading...</p>,
        loader: () =>
          fetch(
            "https://freelance-task-marketplace-server-omega.vercel.app/allTasks"
          ),
        Component: AllItems,
      },
      {
        path: "aboutUs",
        Component: About,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
      {
        path: "privacyPolicy",
        Component: PrivacyPolicy,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signUp",
        Component: SignUp,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "bids/:id",
        hydrateFallbackElement: <p>loading...</p>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-omega.vercel.app/allTasks/${params.id}`
          ),
        Component: Bids,
      },
      {
        path: "taskDetails/:id",
        hydrateFallbackElement: <p>loading...</p>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-omega.vercel.app/allTasks/${params.id}`
          ),
        element: (
            <TaskDetails></TaskDetails>
        ),
      },
      {
        path: "updateTask/:id",
        hydrateFallbackElement: <p>loading...</p>,
        loader: ({ params }) =>
          fetch(
            `https://freelance-task-marketplace-server-omega.vercel.app/allTasks/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
       index:true,
       Component:Statistics
      },
      {
        path: "/dashboard/addTask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/myPostedTasks",
        element: (
          <PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

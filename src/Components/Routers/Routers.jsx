import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthProvider from "../Auth/AuthPro";
import HomeLayOut from "../HomeLayOut/HomeLayOut";
import Login from "../Login/Login";
import News from "../News/News";
import Regsiter from "../Register/Regsiter";
import CategoryCard from "./CategoryCard/CategoryCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut></HomeLayOut>,
    children: [
        {
            path:'',
            element:<Navigate to={'/category/01'}></Navigate>
        },
      {
        path: "/category/:id",
        loader: ({ params }) =>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        element:<CategoryCard></CategoryCard>,
      },
    ],
  },
  {
    path:'/news/:id',
    loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    element:<PrivateRoute><News></News></PrivateRoute>
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
  {
    path:'/auth',
    element:<AuthProvider></AuthProvider>,
    children:[
        {
            path:'/auth/login',
            element:<Login></Login>
        },
        {
            path:'/auth/register',
            element:<Regsiter></Regsiter>
        },
    ]
  },
  {
    path: "/career",
    element: <div>Career</div>,
  },
]);

export default Routers;

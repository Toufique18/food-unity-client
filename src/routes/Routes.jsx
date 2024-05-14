import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddFood from "../pages/AddFood";
import AvailableFood from "../pages/AvailableFood";
import Details from "../pages/Details";
import ManageMyFood from "../pages/ManageMyFood";
import Update from "../pages/Update";
import PrivateRoute from "../pages/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch("https://food-unity-server-tawny.vercel.app/food_info")

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addFood',
                element: <AddFood></AddFood>
            },
            {
                path: '/availableFood',
                element: <AvailableFood></AvailableFood>,
                loader: ()=> fetch("https://food-unity-server-tawny.vercel.app/food_info")

            },
            {
                path: '/details/:_id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ()=> fetch("https://food-unity-server-tawny.vercel.app/food_info")

            },
            {
                path: '/manageFood',
                element: <PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>

            },
            {
                path: '/update/:id',
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ()=> fetch("https://food-unity-server-tawny.vercel.app/food_info")

            },
            
        ]
    }
])

export default router;


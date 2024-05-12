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


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=> fetch("http://localhost:5000/food_info")

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
                loader: ()=> fetch("http://localhost:5000/available_food")

            },
            {
                path: '/details/:_id',
                element: <Details></Details>,
                loader: ()=> fetch("http://localhost:5000/available_food")

            },
            {
                path: '/manageFood',
                element: <ManageMyFood></ManageMyFood>

            },
            {
                path: '/update/:id',
                element: <Update></Update>,
                loader: ()=> fetch("http://localhost:5000/food_info")

            },
            
        ]
    }
])

export default router;


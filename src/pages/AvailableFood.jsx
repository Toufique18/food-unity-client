import { useLoaderData } from "react-router-dom";
import FoodCard from "../components/foodCard/FoodCard";

const AvailableFood = () => {
    const foods = useLoaderData();

    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {foods.map(food => <FoodCard key={food._id} food={food}></FoodCard>)}
            </div>
        </div>
    );
};

export default AvailableFood;
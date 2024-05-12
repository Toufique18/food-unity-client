import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const foods = useLoaderData();
    const { _id } = useParams();
    const idInt = _id;
    const food = foods.find(food => food._id === idInt)
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="card bg-base-100 border border-neutral-900 border-opacity-20">
                <figure className="p-5 m-3 rounded-3xl">
                    <img src={food.imageUrl} alt="Shoes" className="rounded-xl cover" />
                </figure>
                <div className="card-body ">

                    <h2 className="text-neutral-900 text-base font-bold font-['Playfair Display']">Food name: {food.foodName}</h2>
                    <div className="flex justify-between">
                    <img className="h-8 w-8 rounded-full" src={food.donatorImage} alt="" />
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Donator Name: {food.donatorName}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Quantity: <span className="text-green-400">{food.quantity}</span></p>
                        <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Location: {food.location}</p>

                    </div>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Expired Date/Time: {food.time}</p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-normal font-['Work Sans']">Additional Notes: {food.notes}</p>
                    <button className="btn btn-primary bg-purple-500 border-none w-full ">Request</button>


                </div>

            </div>
        </div>
    );
};

export default Details;
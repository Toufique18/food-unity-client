import { Link } from "react-router-dom";

const FoodCard = ({ food }) => {
    const { foodName, imageUrl, quantity, location, time, notes, donatorName, email, donatorImage, status, _id } = food
    return (
        <div className="card bg-base-100 border border-neutral-900 border-opacity-20">
            <figure className="p-5 m-3 bg-zinc-100 rounded-3xl">
                <img src={imageUrl} alt="Shoes" className="rounded-xl w-72 h-40" />
            </figure>
            <div className="card-body ">

                <h2 className="text-neutral-900 text-base font-bold font-['Playfair Display']">Food Name: {foodName}</h2>
                <div className="flex-1 md:flex lg:flex gap-2 justify-between">
                    <img className="h-8 w-8 rounded-full" src={donatorImage} alt="" />
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Donator: {donatorName}</p>
                </div>

                <div className="flex-1 items-center justify-between">
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Quantity: <span className="text-green-400">{quantity}</span></p>
                    <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Location: {location}</p>

                </div>
                <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Expired Date/Time: {time}</p>
                <p className="text-neutral-900 text-opacity-80 text-base font-medium font-['Work Sans']">Additional Notes: {notes}</p>

            </div>
            <div className="text-center p-3">
                <Link to={`/details/${_id}`}>
                    <button className="btn btn-primary bg-purple-500 border-none w-full ">View Details</button></Link>


            </div>
        </div>
    );
};

export default FoodCard;
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const foods = useLoaderData();
    const { id } = useParams();
    //const idInt = _id;
    const food = foods.find(food => food._id === id)
    const handleUpdate = event => {
        
        event.preventDefault();

        const form = event.target;

        const foodName = form.foodName.value;
        const imageUrl = form.imageUrl.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const time = form.time.value;
        const notes = form.notes.value;
        const donatorImage = form.donatorImages.value;
        const donatorName = form.donatorNames.value;
        const email = form.email.value;
        const status = form.status.value;

        const newInfo = { foodName, imageUrl, quantity, location, time, notes, donatorName, email, donatorImage, status }
        console.log(newInfo)
        //send to the server
        fetch(`https://food-unity-server-tawny.vercel.app/food_info/${food._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
             .then(res => res.json())
             .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'success!',
                        text: 'Data updated ',
                        icon: 'success',
                        confirmButtonText: 'OK'
                      })
                }
             })

        console.log(newInfo)

 
    }
    
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="container mx-auto px-4 py-8">
                <div className="border-purple-500 border-2 rounded-xl bg-purple-200 animate-bounce ">
                <h1 className="text-3xl text-center font-semibold mb-8">Update Food Information</h1>
                <h1 className="text-3xl text-center font-semibold mb-8">Food Name: {food.foodName}</h1>
                <h1 className="text-3xl text-center font-semibold mb-8">Updated By: {food.donatorName}</h1>
                </div>
                <form onSubmit={handleUpdate} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Food Name:</label>
                            <input type="text" defaultValue={food.foodName} name="foodName" id="foodName" placeholder="Food Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Image URL:</label>
                            <input type="text" defaultValue={food.imageUrl} name="imageUrl" id="imageUrl" placeholder="Food Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Quantity:</label>
                            <input type="text" defaultValue={food.quantity} name="quantity" id="quantity" placeholder="Food Quantity" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Pickup Location:</label>
                            <input type="text" defaultValue={food.location} name="location" id="location" placeholder="Pickup Location" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Expired Date/Time:</label>
                            <input type="datetime-local" defaultValue={food.time} name="time" id="time" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Additional Notes:</label>
                            <textarea name="notes" defaultValue={food.notes} id="notes" placeholder="Additional Notes" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Image URL:</label>
                            <input type="text" value={food.donatorImage} readOnly name="donatorImages" id="donatorImages" placeholder="Donator Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Name:</label>
                            <input type="text" value={food.donatorName} readOnly name="donatorNames" id="donatorNames" placeholder="Donator Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Email:</label>
                            <input type="email" value={food.email} readOnly name="email" id="email" placeholder="Donator Email" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Status:</label>
                            <input type="text"  defaultValue="available"  name="status" id="status" placeholder="" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                    </div>
                    <button type="submit" value="Add" className="btn btn-primary w-full">Update</button>
                </form>
            </div>
        </div>
    );
};

export default Update;
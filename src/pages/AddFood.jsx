import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [donatorImage, setDonatorImage] = useState(user ? user.photoURL : '');
    const [donatorName, setDonatorName] = useState(user ? user.displayName : '');
    const [email, setDonatorEmail] = useState(user ? user.email : '');

    const handleSubmit = event => {
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
        //sent to server
        fetch("http://localhost:5000/food_info", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    // If data inserted successfully in the first collection, send to the second collection
                    fetch("http://localhost:5000/available_food", {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(newInfo)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            // If data inserted successfully in both collections, show success message
                            Swal.fire({
                                title: 'Success!',
                                text: 'Data added to both collections',
                                icon: 'success',
                                confirmButtonText: 'Close'
                            });
                        }
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }
            })
    }
    //
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-8">Add Food</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Food Name:</label>
                            <input type="text" name="foodName" id="foodName" placeholder="Food Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Image URL:</label>
                            <input type="text" name="imageUrl" id="imageUrl" placeholder="Food Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Quantity:</label>
                            <input type="text" name="quantity" id="quantity" placeholder="Food Quantity" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Pickup Location:</label>
                            <input type="text" name="location" id="location" placeholder="Pickup Location" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Expired Date/Time:</label>
                            <input type="datetime-local" name="time" id="time" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Additional Notes:</label>
                            <textarea name="notes" id="notes" placeholder="Additional Notes" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Image URL:</label>
                            <input type="text" value={donatorImage} onChange={(e) => setDonatorImage(e.target.value)} name="donatorImages" id="donatorImages" placeholder="Donator Image URL" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Name:</label>
                            <input type="text" value={donatorName} onChange={(e) => setDonatorName(e.target.value)} name="donatorNames" id="donatorNames" placeholder="Donator Name" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Donator Email:</label>
                            <input type="email" value={email} onChange={(e) => setDonatorEmail(e.target.value)} name="email" id="email" placeholder="Donator Email" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                        <div>
                            <label>Food Status:</label>
                            <input type="text" defaultValue="available"  name="status" id="status" placeholder="" className="input w-full border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200" />
                        </div>
                    </div>
                    <button type="submit" value="Add" className="btn btn-primary w-full">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddFood;
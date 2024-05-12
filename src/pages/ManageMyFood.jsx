import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";


const ManageMyFood = () => {

    const { user } = useContext(AuthContext)
    const [item, setItem] = useState([]);
    //console.log(user);

    useEffect(() => {
        fetch(`http://localhost:5000/food_info/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/food_info/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your place has been deleted.",
                                icon: "success"
                              });
                        }
                    })
            }
        });
    }
    return (
        <div className="container mx-auto lg:px-20 px-5 py-5 overflow-x-auto">
        <table className="table-auto w-full min-w-max border-collapse border border-gray-800">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Food Name</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {item.map(info => (
                    <tr key={info._id} className="border-b border-gray-400">
                        <td className="px-4 py-2 align-middle"><img className="h-8 w-8" src={info.imageUrl} alt="" /></td>
                        <td className="px-4 py-2 align-middle">{info.foodName}</td>
                        <td className="px-4 py-2 align-middle">{info.quantity}</td>
                        
                        <td className="px-4 py-2 flex gap-2 items-center">
                            <Link to={`/update/${info._id}`}>
                                <button className="btn btn-primary">Update</button>
                            </Link>
                            <button onClick={() => handleDelete(info._id)} className="btn btn-primary">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    

    );
};

export default ManageMyFood;
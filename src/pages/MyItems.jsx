import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, NavLink } from 'react-router';
import { MdError } from "react-icons/md";
import Swal from 'sweetalert2';
import { useTitle } from '../hooks/useTitle';


const MyItems = () => {
   
    //    add dynamic title 
 useTitle('my-items');
 

    const { user } = use(AuthContext);
    console.log('token',user?.accessToken);
    
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_apiUrl}/my-items/${user?.email}`)
            .then(res => {
                console.log(res.data);
                setMyItems(res.data);
            })
    }, [user]);


    const handleDeleteItem = (id) => {

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
                // api call for delete
                axios.delete(`${import.meta.env.VITE_apiUrl}/delete-item/${id}`)
                    .then((res) => {
                        console.log(res);
                        const remainingItems = myItems.filter(item => item._id !== id);
                        setMyItems(remainingItems);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });


                    })


            }
        });

    }





    if (myItems.length === 0) {
        return <>
            <div className='flex flex-col items-center justify-center mt-10'>
                <div className='flex items-center md:text-4xl text-2xl text-[#597974]'>
                    <MdError />
                    <p className=''> There is no item added here !!! </p>
                </div>
                <Link to='/'>
                    <button className='btn text-white bg-[#568F87] mt-5'>Back Home</button>
                </Link>
            </div>
        </>
    }


    
    return (
        <div className="overflow-x-auto bg-white md:p-20 py-7 mt-20">
            <table className="min-w-full table-auto border-collapse ">
                <thead className="bg-[#568F87] text-white">
                    <tr>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Thumbnail</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Title</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Type</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Category</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Location</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Description</th>
                        <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
                        <th className="px-4 py-2 text-center text-sm font-semibold">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {myItems.map(item => (
                        <tr
                            key={item._id}
                            className="border-b border-gray-300 hover:bg-gray-50"
                        >
                            <td className="px-4 py-2">
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </td>
                            <td className="px-4 py-2 text-sm text-gray-600">{item.title}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{item.postType}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{item.category}</td>
                            <td className="px-4 py-2 text-sm text-gray-600">{item.location}</td>
                            <td className="px-4 py-2 text-sm text-gray-600" title={item.description}>{item.description.slice(0, 15)}... </td>
                            <td className="px-4 py-2 text-sm text-gray-600">
                                {new Date(item.date).toLocaleDateString()}
                            </td>
                            <td className="px-4 py-2 text-sm text-center space-x-2 space-y-2">
                                <NavLink to={`/update-item/${item._id}`}>
                                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-3 py-2  rounded text-xs">
                                        Update
                                    </button>
                                </NavLink>
                                <button
                                    onClick={() => handleDeleteItem(item._id)}
                                    className="bg-yellow-600 hover:bg-yellow-700 font-bold text-white px-3 py-2 rounded text-xs">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default MyItems;
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';



const UpdateItem = () => {
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const item = useLoaderData();
    const { _id, thumbnail, title, postType, category, date, description, email, location, name } = item.data;


    // update date with pre value
    useEffect(() => {
        if (date) {
            setSelectedDate(new Date(date));
        }
    }, [date]);



    const handleUpdateItem = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form);
        const updateItem = Object.fromEntries(formData.entries());

        // api call for update Item
        axios.put(`${import.meta.env.VITE_apiUrl}/update-item/${_id}`, updateItem)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Item Update SuccessFully!",
                    icon: "success",
                    draggable: true
                });
                navigate('/my-items');
            }).catch(err => {
                console.log(err);

            })


    }


    return (
        <div>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg  mt-20">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#568F87]">Add Lost/Found Item</h2>
                <form onSubmit={handleUpdateItem} className="">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div>
                            <label className=" mb-1 font-medium text-[#568F87]">Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                required
                            />
                        </div>

                        {/* Post Type */}
                        <div>
                            <label className=" mb-1 font-medium text-[#568F87]">Post Type</label>
                            <select
                                name="postType"
                                defaultValue={postType}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                            >
                                <option value="Lost" >Lost</option>
                                <option value="Found" >Found</option>
                            </select>
                        </div>

                        {/* Category (full width) */}
                        <div className="md:col-span-2">
                            <label className=" mb-1 font-medium text-[#568F87]">Category</label>
                            <input
                                type="text"
                                name="category"
                                defaultValue={category}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                placeholder="e.g. Pets, Documents, Gadgets"
                                required
                            />
                        </div>
                        {/* Thumbnail (half width) */}
                        <div className='md:col-span-2'>
                            <label className=" mb-1 font-medium text-[#568F87]">Thumbnail (Image URL)</label>
                            <input
                                type="text"
                                name="thumbnail"
                                defaultValue={thumbnail}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                required
                            />
                        </div>
                        {/* Location  */}
                        <div className=''>
                            <label className=" mb-1 font-medium text-[#568F87]">Location</label>
                            <input
                                type="text"
                                defaultValue={location}
                                name="location"
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                required
                            />
                        </div>

                        {/* Date  */}
                        <div className=''>
                            <label className=" mb-1 text-[#568F87] font-medium">Date Lost/Found</label>
                            <div className='border border-gray-400 rounded-lg p-1'>
                                <DatePicker
                                    showIcon
                                    selected={selectedDate}
                                    name="date"

                                    onChange={(date) => setSelectedDate(date)}
                                    className="outline-none"
                                />
                            </div>
                        </div>




                        {/* Description (full width) */}
                        <div className="md:col-span-2">
                            <label className=" mb-1 font-medium text-[#568F87]">Description</label>
                            <textarea
                                name="description"
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                rows="3"
                                defaultValue={description}
                                required
                            />
                        </div>
                        {/* Contact Info (Name + Email in 2 cols) */}

                        <div className='md:col-span-2'>
                            <label className=" font-medium text-[#568F87]">Contact Info</label>
                        </div>
                        <div>
                            <input
                                type="text"
                                name="name"
                                disabled
                                defaultValue={name}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                            />

                        </div>
                        <div>

                            <input
                                type="email"
                                name="email"
                                disabled
                                defaultValue={email}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                            />
                        </div>

                    </div>


                    <div className='my-5'>
                        <button
                            type="submit"
                            className="w-full bg-[#568F87] text-white p-3 rounded-lg hover:bg-[#4a8078] font-bold"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;
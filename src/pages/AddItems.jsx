import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';


const AddItems = () => {



    const { user } = use(AuthContext);
    const [selectedDate, setSelectedDate] = useState(new Date());



    const handleAddItems = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form)
        const newItem = Object.fromEntries(formData.entries());
       
        newItem.photo = user?.photoURL;
        



        // api call for items save in db
        axios.post(`${import.meta.env.VITE_apiUrl}/add-items`, newItem)
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Item add SuccessFully!",
                    icon: "success",
                    draggable: true
                });
                  form.reset();
            }).catch(err => {
                console.log(err);

            })

    }
    return (
        <>

            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg  mt-8">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#568F87]">Add Lost/Found Item</h2>
                <form onSubmit={handleAddItems} className="">
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Title */}
                        <div>
                            <label className=" mb-1 font-medium text-[#568F87]">Title</label>
                            <input
                                type="text"
                                name="title"
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                required
                            />
                        </div>

                        {/* Post Type */}
                        <div>
                            <label className=" mb-1 font-medium text-[#568F87]">Post Type</label>
                            <select
                                name="postType"
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
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                                required
                            />
                        </div>
                        {/* Location  */}
                        <div className=''>
                            <label className=" mb-1 font-medium text-[#568F87]">Location</label>
                            <input
                                type="text"
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
                                defaultValue={user?.displayName}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                            />

                        </div>
                        <div>

                            <input
                                type="email"
                                name="email"
                                defaultValue={user?.email}
                                className="w-full border border-gray-400 rounded-lg p-2 outline-none"
                            />
                        </div>

                    </div>


                    <div className='my-5'>
                        <button
                            type="submit"
                            className="w-full bg-[#568F87] text-white p-3 rounded-lg hover:bg-[#4a8078] font-bold"
                        >
                            Add Post
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
};

export default AddItems;
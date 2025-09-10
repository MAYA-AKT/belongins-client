import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';
 import { toast } from 'react-toastify';

const ItemsDetails = () => {
    const item = useLoaderData();
    const navigate = useNavigate();
    const { _id, thumbnail, title, postType, category, date, description, email, location, name, photo,status } = item.data;


    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);
    const [recoveredLocation, setRecoveredLocation] = useState("");
    const [recoveredDate, setRecoveredDate] = useState();

    const handleRecovedItem = (e) => {
        e.preventDefault();
        const form = e.target;

        const formData = new FormData(form)
        const recoverdItem = Object.fromEntries(formData.entries());
      
        recoverdItem.itemId = _id;
        if(status){
            return toast.error('Items already Recoverd');
        }
        // api call for recovery item
        axios.post(`${import.meta.env.VITE_apiUrl}/recoveries-item`, recoverdItem)
            .then(res => {
                
                Swal.fire({
                    title: res.data.message,
                    icon: "success",
                    draggable: true
                });
                navigate(`/details/${_id}`)
            }).catch(err => {
                console.log(err);

            })
    }

    return (
        <div className=" bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row mt-15 p-10">

            <div className="md:w-1/3 h-64 md:h-auto">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-4 flex-shrink-0">
                        <img src={photo} alt={name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
                        <p className="text-sm text-gray-500">{email}</p>
                    </div>
                </div>
                <div className="text-xs text-[#568F87]">Post Date : {date}</div>
                {/* Body */}
                <div className="m-6 space-y-2">
                    <p className="text-lg font-semibold text-[#568F87]">{title}</p>
                    <p className="text-gray-500">Description : {description}</p>

                    <p className=" text-gray-500"> Category : <span className='text-[#568F87]'> {category}</span></p>
                    <p className='text-gray-500'>Location : <span className='text-[#568F87]'>{location}</span></p>
                    <button
                        onClick={handleOpen}
                        className={`px-4 py-2 rounded-lg text-white ${postType === "Lost" ? "bg-blue-600" : "bg-green-600"
                            }`}
                    >
                        {postType === "Lost" ? "Found This!" : "This is Mine!"}
                    </button>
                </div>

                {/* Footer */}

            </div>

            {/* modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-transparant bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-bold mb-4 text-center text-[#568F87]">Recovery Details</h2>
                        <div className="flex items-center gap-2 my-7">
                            <img src={photo} alt="user" className="w-10 h-10 rounded-full" />
                            <span>{name}</span>
                        </div>

                        <form onSubmit={handleRecovedItem}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-[#568F87]">Recovered Location</label>
                                <input
                                    type="text"
                                    name='location'
                                    className="w-full border border-gray-300 rounded p-2 outline-[#568F87]"
                                    placeholder="Enter location"
                                    value={recoveredLocation}
                                    onChange={(e) => setRecoveredLocation(e.target.value)}
                                />
                            </div>


                            <div className="mb-3">
                                <label className="block text-sm font-medium text-[#568F87]">Recovery Date</label>
                                <DatePicker
                                    name='date'
                                    selected={recoveredDate}
                                    onChange={(date) => setRecoveredDate(date)}
                                    placeholderText='Enter Date'
                                    className="w-full border border-gray-300 rounded p-2 outline-[#568F87]"
                                />
                            </div>


                            <div className="mb-3">
                                <label className="block text-sm font-medium text-[#568F87]">Recovered By</label>
                                <input
                                    type="text"
                                    value={name}
                                    name='name'
                                    readOnly
                                    className="w-full border border-gray-300 rounded p-2 bg-gray-100 outline-[#568F87]"
                                />
                                <input
                                    type="text"
                                    value={email}
                                    name='email'
                                    readOnly
                                    className="w-full border border-gray-300 rounded p-2 mt-2 bg-gray-100 outline-[#568F87]"
                                />

                            </div>
                            <div className="flex justify-end gap-2 mt-4">
                                <button
                                    onClick={handleClose}
                                    className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                                >
                                    Cancel
                                </button>
                                <button
                                    type='submit'
                                    
                                    className="px-4 py-2 bg-[#568F87] text-white rounded-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            )}

        </div>

    );
};

export default ItemsDetails;
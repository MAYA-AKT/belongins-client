import axios from 'axios';
import React from 'react';
import { use } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { MdError } from "react-icons/md";
import { Link } from 'react-router';
import { IoGridSharp } from "react-icons/io5";
import { IoTabletLandscapeOutline } from "react-icons/io5";
import RecoverdCard from '../componants/RecoverdCard';
import RecoverdTable from '../componants/RecoverdTable';
import { CiGrid2H } from "react-icons/ci";
import { useTitle } from '../hooks/useTitle';

const AllRecoverdItem = () => {

//    add dynamic title 
 useTitle('recovered-items');




    const { user } = use(AuthContext);
    const [format, setFormat] = useState(true);
    const [recItems, setRecItems] = useState([]);

   console.log(recItems);
   
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_apiUrl}/all-recoverd-items/${user?.email}`,{
            headers:{
                authorization:`Bearer ${user?.accessToken}`
            }
        })
            .then(res => {
                setRecItems(res.data);
            }).catch(err => {
                console.log(err);

            })
    }, [user]);


    if (recItems.length === 0) {
        return <>
            <div className='flex flex-col items-center justify-center mt-10'>
                <div className='flex items-center md:text-4xl text-2xl text-[#597974]'>
                    <MdError />
                    <p className=''> There is no Recoverd Items !!! </p>
                </div>
                <Link to='/'>
                    <button className='btn text-white bg-[#568F87] mt-5'>Back Home</button>
                </Link>
            </div>
        </>
    }

    return (
        <div className='md:my-20 my-15'>
 
            <div className='space-x-2 flex justify-end md:my-8 my-4'>
                <button onClick={() => setFormat(!format)}>
                    <IoGridSharp className={format ? 'text-[#568F87] text-2xl' : 'text-2xl text-gray-500'}/>
                </button>
                <button onClick={() => setFormat(!format)} >
                    <CiGrid2H className={format ? ' text-gray-500 font-bold text-2xl' : ' font-bold text-2xl text-[#568F87] '} />
                </button>
            </div>

            <div>
                {format === true ? <>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            recItems.map((item) => <RecoverdCard key={item._id} item={item} />)
                        }
                    </div>
                </>
                    :
                    <>
                        <div className='overflow-x-auto bg-white md:p-7 py-4'>
                            <table className="min-w-full table-auto border-collapse ">
                                <thead className="bg-[#568F87] text-white">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-semibold">Email</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold">Name</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold">Location</th>
                                        <th className="px-4 py-2 text-left text-sm font-semibold">Date</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {recItems.map(item => <RecoverdTable key={item._id} item={item} /> )}
                                </tbody>
                            </table>
                        </div>
                    </>

                }
            </div>


        </div>
    );
};

export default AllRecoverdItem;
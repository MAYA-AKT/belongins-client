import React from 'react';

const RecoverdTable = ({ item }) => {
    console.log(item);
    
    return (
        <>
            <tr
               
                className="border-b border-gray-300 hover:bg-gray-50"
            >

                <td className="px-4 py-2 text-sm text-gray-600">{item.email}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{item.name}</td>

                <td className="px-4 py-2 text-sm text-gray-600">{item.location}</td>

                <td className="px-4 py-2 text-sm text-gray-600">
                    {item.date}
                </td>

            </tr>
        </>
    );
};

export default RecoverdTable;
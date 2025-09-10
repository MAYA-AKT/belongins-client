import React from 'react';
import { Users, Package, MapPin } from "lucide-react";


const Starts = () => {

    const stats = [
        {
            id: 1,
            icon: <Users className="w-10 h-10 text-indigo-600" />,
            value: "1,200+",
            label: "Users",
        },
        {
            id: 2,
            icon: <Package className="w-10 h-10 text-green-600" />,
            value: "300+",
            label: "Items Recovered",
        },
        {
            id: 3,
            icon: <MapPin className="w-10 h-10 text-pink-600" />,
            value: "5",
            label: "Active Cities",
        },
    ];

    return (
        <div>
            <section className="py-16 bg-gradient-to-r from-white to-[#568F87]">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12">
                        Our Impact in Numbers
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="mb-4">{stat.icon}</div>
                                <h3 className="text-4xl font-extrabold text-gray-900">
                                    {stat.value}
                                </h3>
                                <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Starts;
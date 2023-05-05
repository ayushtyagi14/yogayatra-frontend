import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import MyHead from '../components/MyHead';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('upcoming-classes');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem("authenticated");
        router.push("/")
    }

    return (
        <>
            <MyHead title='Your Dashboard | Yogayatra' />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className='flex w-[97%] justify-end mt-5'>
                <button
                    className='md:text-[24px] text-[20px] bg-[#B4AAA7] border border-[#B4AAA7] hover:bg-[#ececec] px-5 py-1 rounded-xl text-white hover:text-[#B4AAA7] my-4 md:my-0'
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-[90%] mx-auto">
                    <div className="border-b border-gray-300">
                        <div className="flex justify-between">
                            <button
                                className={`py-4 px-6 text-[40px] font-semibold ${activeTab === 'upcoming-classes' ? 'text-black' : 'text-gray-500'
                                    }`}
                                onClick={() => handleTabClick('upcoming-classes')}
                            >
                                Upcoming Classes
                            </button>
                            <button
                                className={`py-4 px-6 text-[40px] font-semibold ${activeTab === 'past-classes' ? 'text-black' : 'text-gray-500'
                                    }`}
                                onClick={() => handleTabClick('past-classes')}
                            >
                                Past Classes
                            </button>
                            <button
                                className={`py-4 px-6 text-[40px] font-semibold ${activeTab === 'profile' ? 'text-black' : 'text-gray-500'
                                    }`}
                                onClick={() => handleTabClick('profile')}
                            >
                                Your Profile
                            </button>
                        </div>
                    </div>
                    <div className="py-10">
                        {activeTab === 'profile' && (
                            <div>
                                <h1 className="text-2xl font-semibold mb-4">Your Profile</h1>
                                {/* Your Profile content goes here */}
                            </div>
                        )}
                        {activeTab === 'upcoming-classes' && (
                            <div>
                                <h1 className="text-2xl font-semibold mb-4">Your Classes</h1>
                                {/* Your Classes content goes here */}
                            </div>
                        )}
                        {activeTab === 'past-classes' && (
                            <div>
                                <h1 className="text-2xl font-semibold mb-4">Past Classes</h1>
                                {/* Past Classes content goes here */}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;

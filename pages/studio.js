import React, { useState } from 'react'
import Image from 'next/image'
import MyHead from '../components/MyHead'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Studio = () => {
    const studioImg = [
        { src: "/assets/studio1.jpg" },
        { src: "/assets/studio2.jpg" },
        { src: "/assets/studio3.jpg" },
        { src: "/assets/studio4.jpg" },
        { src: "/assets/studio5.jpg" },
        { src: "/assets/studio6.jpg" },
        { src: "/assets/studio7.jpg" },
        { src: "/assets/studio8.jpg" },
        { src: "/assets/studio9.jpg" },
        { src: "/assets/studio10.jpg" },
        { src: "/assets/studio11.jpg" },
        { src: "/assets/studio12.jpg" },
        { src: "/assets/studio13.jpg" },
        { src: "/assets/studio14.jpg" },
        { src: "/assets/studio15.jpg" },
        { src: "/assets/studio16.jpg" },
        { src: "/assets/studio17.jpg" },
    ];

    return (
        <>
            <MyHead title="Studio | Yogayatra" />
            <div className="w-full bg-[#353746] shadow z-[999]">
                <Navbar />
            </div>
            <div className='flex flex-col items-center mt-10 mb-28 w-[90%] mx-auto'>

                <Image
                    src="/assets/facilities.png"
                    width={200}
                    height={200}
                    alt='facilities yogayatra'
                    className='w-full my-10'
                />

                <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
                    {studioImg.map((item, index) => (
                        <Image
                            src={item.src}
                            width={400}
                            height={200}
                            alt="studio image"
                            className="h-40 md:h-64 w-72 rounded"
                            key={index}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Studio

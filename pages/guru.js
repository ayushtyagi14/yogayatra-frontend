import React from "react";
import Layout from '../components/Layout/Layout'
import Image from 'next/image'

const Guru = () => {
    return (
        <>
            <Layout title='Guru | Yogayatra'>
                <div className="">
                    <div className="relative">
                        <div className="md:h-[75vh] h-[55vh]">
                            <Image
                                src={"/assets/guru-banner.webp"}
                                alt="Our Yoga Guru"
                                fill
                                className="brightness-[65%] object-cover"
                            />
                        </div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                            <h1 className="md:text-[50px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
                                Yoga Guru
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center px-10 md:mt-0 mt-10">
                        <div className="md:w-1/2 lg:w-[40%]">
                            <div className="relative w-full mb-4 md:mb-0">
                                <img src={'/assets/guru.webp'} alt="Our Yoga Guru" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                        <div className="md:w-1/2 lg:w-2/3 md:ml-8">
                            <h1 className="text-4xl font-bold text-gray-800 mt-8 mb-4 text-center">Our Yoga Guru</h1>
                            <p className="text-gray-700 leading-loose text-lg">
                                Meet our yoga guru, who has dedicated his life to the practice of yoga and has been teaching it to the people of Karur for the past seven years. He is not just a yoga teacher, but a true inspiration for anyone who is looking to lead a healthy and fulfilling life.
                            </p>
                            <p className="text-gray-700 leading-loose text-lg mt-4">
                                Our yoga guru has not only mastered the physical postures of yoga, but has also delved deep into the spiritual and mental aspects of the practice. His teachings go beyond just the physical practice of yoga and encompass the whole person, helping students to achieve a sense of balance and harmony in their lives.
                            </p>
                            <p className="text-gray-700 leading-loose text-lg mt-4">
                                Through his tireless efforts, our yoga guru has created a studio in Karur that is considered a true blessing for the people who live there. The studio is a safe and welcoming space where students can come and experience the transformative power of yoga.
                            </p>
                            <p className="text-gray-700 leading-loose text-lg mt-4">
                                Our guru&apos;s dedication to his craft is truly inspiring. He has sacrificed so much in order to share his knowledge of yoga with others. He has spent countless hours practicing and perfecting his own practice, and has invested countless resources into his studio to make it the best it can be.
                            </p>
                            <p className="text-gray-700 leading-loose text-lg mt-4">
                                But perhaps the most inspiring thing about our yoga guru is the way he has impacted the lives of his students. Through his teachings, he has helped countless people to achieve a sense of peace, balance, and fulfillment in their lives. He has encouraged them to explore their own potential and to strive for their own personal growth and development.
                            </p>
                            <p className="text-gray-700 leading-loose text-lg mt-4">
                                We are incredibly grateful to have such a dedicated and inspiring yoga guru here in Karur, and we know that his legacy will continue to impact the lives of many for years to come.
                            </p>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Guru

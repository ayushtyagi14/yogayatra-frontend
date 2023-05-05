import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MyHead from '../../components/MyHead'

const RathnavelPandian = () => {
    return (
        <>
            <MyHead title='Rathnavel Pandian | Yogayatra' />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className="mx-10 mt-10 px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src="/assets/rathnavel-pandian.png"
                        alt="Sakina Vagh"
                        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-semibold mb-4">Rathnavel Pandian</h1>
                        <p className="text-lg mb-4">
                            Meet our talented yoga instructor Mr. Rathnavel Pand Ian who is incredibly experienced, brings his unique expertise to every class. With years of training and a passion for helping students improve their physical and mental well-being, he creates a welcoming and inclusive atmosphere in every session.
                        </p>
                        <p className="text-lg mb-8">
                            Whether you are a beginner or a seasoned practitioner, he is dedicated to helping you reach your goals and find inner peace through the practice of yoga. Not only that, but he is also exceptional at teaching yoga to children.
                        </p>
                        <p className="text-lg mb-8">
                            Adding to it we are proud to share that students from our yoga studio have achieved international recognition for their exceptional skills in yoga. Our students have won international championships in various categories, demonstrating their dedication and passion for the practice.Their remarkable achievements reflect the high level of training and instruction they receive at our studio, and we are honored to have played a part in their success. We look forward to continuing to support our students as they pursue their goals and achieve even greater accomplishments in the future.
                        </p>
                        <h1>He has received many remarkable awards such as: </h1>
                        <ul className="list-disc list-inside mb-8">
                            <li>
                                Won fourth place at International Yoga Festival organized by Government of Puducherry Department of Tourism and Development-2017
                            </li>
                            <li>
                                Won Gold medal organized by Anna University Inter-Zonal Yogasana Tournament - 2012
                            </li>
                            <li>
                                Holding the &apos;Online World Record&apos; for &apos;Most time to Maintain Hastha Angustha Sirasasanam&apos;
                            </li>
                            <li>
                                Holding the &apos;Online World Record&apos; for &apos;Chandra Namaskar&apos;
                            </li>
                            <li>
                                As a Coach to J.J. Institution Yogasana team which consecutively 8 years overall championship at Anna University
                            </li>
                            <li>
                                SWAMI VIVEKANANDA AWARD
                            </li>
                            <li>
                                Gold Medalist Up to National Level Taekwondo Tournaments
                            </li>
                            <li>
                                Secured 4th position for All India Inter University Yogasana Tournaments, held at KIIT university, Oddisa. 2017-2018
                            </li>
                            <li>
                                Won Overall (M&W) Championship Best Performer Award for All India Inter University Yogasana Tournaments, 2018- 2019
                            </li>
                            <li>
                                Won Overall Men Best performer award from Rajiv Gandhi University of Knowledge and Technology 2019 - 2020
                            </li>
                            <li>
                                &apos;BEST GURU&apos; Award from All India Yoga Masters Association-2018
                            </li>
                            <li>
                                &apos;Chief Guest&apos; Gowtham&apos;s Yogalaya - Erode advance training camp for School Students form Erode 30-05-2022
                            </li>
                            <li>
                                &apos;Thanga Thamarai Yoga Award - 2022&apos; from Bharatiya Janata Party - Tamilnadu
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default RathnavelPandian;

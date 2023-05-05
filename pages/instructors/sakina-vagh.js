import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import MyHead from '../../components/MyHead'

const SakinaVagh = () => {
    return (
        <>
            <MyHead title='Sakina Vagh | Yogayatra' />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className="mx-10 mt-10 px-4 md:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row items-center mb-8">
                    <img
                        src="/assets/sakina-vagh.png"
                        alt="Sakina Vagh"
                        className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-8"
                    />
                    <div className="md:w-2/3">
                        <h1 className="text-3xl font-semibold mb-4">Sakina Vagh</h1>
                        <p className="text-lg mb-4">
                            We are delighted to introduce Mrs. Sakina Vagh who is dedicated to teaching yoga to women of all ages and skill levels.
                        </p>
                        <p className="text-lg mb-8">
                            She is a 750 hrs Yoga Alliance international certified trainer.
                        </p>
                        <ul className="list-disc list-inside mb-8">
                            <li>Certified in Hatha</li>
                            <li>Certified in Ashtanga</li>
                            <li>Certified in Yin Yoga</li>
                            <li>Certified in Yoga Props</li>
                            <li>Certified in Asana alignment level 3</li>
                            <li>Certified in Face Yoga</li>
                            <li>Certified in Prenatal &amp; Postnatal Yoga</li>
                            <li>Certified in Pilates Mat 1 - UK certified</li>
                        </ul>
                        <p className="text-lg mb-8">
                            Her unique approach to women&apos;s yoga emphasizes the connection between mind, body, and spirit, helping her students achieve a sense of balance and well-being. Whether you&apos;re looking to build strength, improve flexibility, or simply unwind, she creates a supportive and uplifting atmosphere that encourages you to reach your goals.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SakinaVagh;

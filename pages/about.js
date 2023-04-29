import React from 'react';
import Layout from '../components/Layout/Layout';
import Image from 'next/image';

const About = () => {
    return (
        <>
            <Layout>
                <div className='relative'>
                    <div className='md:h-[95vh] h-[50vh]'>
                        <Image
                            src={'/assets/about-banner.jpeg'}
                            alt="about-us"
                            fill
                            className='brightness-[65%]'
                        />
                    </div>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10'>
                        <h1 className='md:text-[100px] text-[50px] mt-20 md:mt-0 font-bold md:mb-4'>About Us</h1>
                    </div>
                </div>
                <div className='mx-auto max-w-3xl my-10 px-4 sm:px-6 lg:px-8'>
                    <h1 className='text-[60px] text-center font-bold mb-6'>Welcome to
                        <span className='text-[#f96454]'> Yoga Yatra </span>
                    </h1>
                    <p className='text-[26px] mb-6'>Your journey towards holistic well-being begins here at our premier yoga studio located in the beautiful city of Coimbatore.</p>
                    <p className='text-[26px] mb-6'>Our journey with yoga began over seven years ago and has been a life-changing experience for us. We discovered the transformative power of yoga and its ability to create a sense of inner peace, balance, and connection.</p>
                    <p className='text-[26px] mb-6'>Inspired by the positive impact that yoga had on our lives, we decided to share our passion and open a yoga studio in Coimbatore. Our vision was to create a space where like-minded individuals could come together, practice yoga, and build a community based on wellness and mindfulness.</p>
                    <p className='text-[26px] mb-6'>At our studio, we offer a wide range of classes that cater to all levels of yoga practitioners. From Hatha and Vinyasa to Restorative and Yin, our experienced teachers are here to guide you on your journey and help you discover the benefits of yoga.</p>
                    <p className='text-[26px] mb-6'>We believe that yoga is not just a physical practice but a way of life. Our supportive and nurturing environment allows our students to cultivate mindfulness, self-awareness, and compassion towards themselves and others.</p>
                    <p className='text-[26px] mb-6'>We are committed to building a community that embraces diversity, inclusivity, and respect. Our studio is a safe space for all individuals, regardless of their age, gender, or background, to come together and connect through the practice of yoga.</p>
                    <p className='text-[26px] mb-6'>Join us on your journey towards wellness and mindfulness and become a part of our community at Yoga Yatra.</p>
                </div>
            </Layout>
        </>
    );
};

export default About;

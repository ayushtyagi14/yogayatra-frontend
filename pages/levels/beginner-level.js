import React from 'react'
import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

const BeginnerLevel = () => {
    return (
        <>
            <Layout title='Beginner Level | Yogayatra'>
                <div className="relative">
                    <div className="md:h-[75vh] h-[55vh]">
                        <Image
                            src={"/assets/beginner-level.jpg"}
                            alt="Yogayatra Beginner Level Yoga Session"
                            fill
                            className="brightness-[65%] object-cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                        <h1 className="md:text-[50px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
                            Beginner Level
                        </h1>
                    </div>
                </div>
                <div className='mx-10 mt-10'>
                    <h1 className='md:text-[40px] text-[28px] text-[#f86454] uppercase font-bold mb-6 text-center'>Beginner Level</h1>
                    <p className='text-lg mb-4'>Our beginner&apos;s yoga classes are designed to introduce you to the foundational principles of yoga and help you build a strong foundation for your practice. Our experienced teachers will guide you through the basic yoga poses, breathing techniques, and relaxation practices, giving you the confidence and tools to continue your journey towards wellness.</p>
                    <p className='text-lg mb-4'>In our classes, we focus on alignment, breath awareness, and mindfulness, helping you develop a greater awareness of your body, mind, and breath. We encourage our students to move at their own pace and to honor their bodies, respecting their limitations and challenges.</p>
                    <p className='text-lg mb-4'>At our studio, we believe that yoga is for everybody and every body. Our classes are accessible to all levels of practitioners, regardless of their age, flexibility, or physical condition. We offer a range of props, including blocks, straps, and blankets, to support your practice and make it accessible for all body types and levels of flexibility.</p>
                    <p className='text-lg mb-4'>We strive to create a supportive and nurturing environment where our students can explore and grow in their practice, without judgment or pressure. Our studio is a safe space for all individuals, and we welcome you to join our community of like-minded individuals who share a passion for yoga and wellness.</p>
                    <p className='text-lg mb-4'>Take the first step towards your journey of wellness and mindfulness by joining our beginner&apos;s yoga class.</p>
                </div>
            </Layout>
        </>
    )
}

export default BeginnerLevel

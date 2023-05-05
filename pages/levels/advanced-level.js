import React from 'react'
import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

const AdvancedLevel = () => {
    return (
        <>
            <Layout title='Advanced Level | Yogayatra'>
                <div className="relative">
                    <div className="md:h-[80vh] h-[55vh]">
                        <Image
                            src={"/assets/advanced-level.jpg"}
                            alt="Yogayatra Advanced Level Yoga Session"
                            fill
                            className="brightness-[65%] object-cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                        <h1 className="md:text-[50px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
                            Advanced Level
                        </h1>
                    </div>
                </div>
                <div className='mx-10 mt-10'>
                    <h1 className='md:text-[40px] text-[28px] text-[#f86454] uppercase font-bold mb-6 text-center'>Advanced Level</h1>
                    <p className='text-lg mb-4'>
                        Our advanced yoga classes are designed for students who have a deep understanding of yoga and are looking to explore more complex and challenging postures, breathing techniques, and mindfulness practices.
                    </p>
                    <p className='text-lg mb-4'>
                        In our advanced classes, we focus on refining your technique, building greater strength and flexibility, and exploring more advanced poses such as arm balances, inversions, and backbends. Our experienced teachers will guide you through a dynamic and challenging sequence of postures, helping you explore your edge and move beyond your comfort zone.
                    </p>
                    <p className='text-lg mb-4'>
                        We emphasize proper alignment, breath awareness, and mindfulness, helping you cultivate a greater sense of body-mind connection and develop a more profound understanding of yoga.
                    </p>
                    <p className='text-lg mb-4'>
                        Our advanced yoga classes are suitable for experienced practitioners who have been practicing yoga for several years and are comfortable with a wide range of yoga poses. We encourage our students to approach their practice with humility, curiosity, and a sense of playful exploration, acknowledging that there is always room for growth and improvement.
                    </p>
                </div>
            </Layout>
        </>
    )
}

export default AdvancedLevel

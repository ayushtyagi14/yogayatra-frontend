import React from 'react'
import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

const IntermediateLevel = () => {
    return (
        <>
            <Layout title='Intermediate Level | Yogayatra'>
                <div className="relative">
                    <div className="md:h-[75vh] h-[55vh]">
                        <Image
                            src={"/assets/intermediate-level.jpg"}
                            alt="Yogayatra Intermediate Level Yoga Session"
                            fill
                            className="brightness-[65%] object-cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
                        <h1 className="md:text-[50px] text-[30px] mt-10 md:mt-0 font-bold md:mb-4">
                            Intermediate Level
                        </h1>
                    </div>
                </div>
                <div className='mx-10 mt-10'>
                    <h1 className='md:text-[40px] text-[28px] text-[#f86454] uppercase font-bold mb-6 text-center'>Intermediate Level</h1>
                    <p className='text-lg mb-4'>Our intermediate yoga classes are designed for students who have a foundational understanding of yoga and are ready to deepen their practice. In our classes, we focus on building strength, flexibility, and balance while exploring more advanced postures, breathing techniques, and mindfulness practices.
                    </p>
                    <p className='text-lg mb-4'>Our experienced teachers will guide you through a dynamic and challenging sequence of postures, encouraging you to explore your edge and move beyond your comfort zone. We emphasize proper alignment, breath awareness, and mindfulness, helping you cultivate a greater sense of body-mind connection.
                    </p>
                    <p className='text-lg mb-4'>Our intermediate yoga classes are suitable for students who have been practicing yoga for at least a few months and are comfortable with basic yoga poses. We encourage our students to approach their practice with an open mind and a sense of curiosity, exploring their bodies and minds with a sense of playful exploration.</p>
                </div>
            </Layout>
        </>
    )
}

export default IntermediateLevel

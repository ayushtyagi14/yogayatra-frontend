import React from 'react'
import MyHead from '../components/MyHead'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs = () => {
    return (
        <>
            <MyHead title='Contact Us | Yogayatra' />
            <div className="w-full bg-[#B4AAA7] shadow z-[999]">
                <Navbar />
            </div>
            <div className='flex flex-col items-center my-20'>
                <h1 className='text-3xl uppercase mb-10 font-poppins'>Contact Us</h1>
                <div className='md:w-[80%] w-[90%] h-72 sm:h-96'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.178848619565!2d76.9945012!3d11.0252044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8592857e143ff%3A0x92a3715a272003b4!2sYOGA%20YATRA%20-%20Vivekananda%20Institute%20of%20Yoga%20Therapy!5e0!3m2!1sen!2sin!4v1683298801601!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        // style={{ border: 0, borderRadius: '10px' }}
                        className='border-none rounded-xl shadow'
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
                <div className='flex flex-col items-center mt-10'>
                    <a href='mailto:yogayatra.in@gmail.com' className='text-lg font-bold mb-3'>✉️ yogayatra.in@gmail.com </a>
                    <a href="tel:+917845283933" className='text-lg font-bold'>📞 +91 7845283933</a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs

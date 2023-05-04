import React from 'react'
import Image from 'next/image';
import Layout from '../components/Layout/Layout';

const Testimonials = ({ testimonial }) => {
    return (
        <>
            {console.log(testimonial)}
            <Layout>
                <div className='flex flex-col'>
                    {testimonial?.length > 0 &&
                        testimonial.map((item) => (
                            <div
                                className="bg-white text-black h-max min-h-[250px] mt-20 grid md:grid-cols-2 grid-cols-1 rounded-lg items-center w-[90%] mx-auto"
                                key={item._id}
                            >
                                <div className="flex justify-center md:justify-start">
                                    <Image
                                        src={item.testimonialImg}
                                        alt={item.testimonialPersonName}
                                        className="md:ml-20 p-5 h-[300px] object-cover"
                                        width={250}
                                        height={200}
                                    />
                                </div>
                                <div className="flex flex-col md:items-start items-center md:text-left text-center">
                                    <div className="my-5">
                                        <h1 className="text-[24px] uppercase">
                                            {item.testimonialPersonName}
                                        </h1>
                                        <p className="text-[#5c5c5c] my-2">
                                            {item.testimonialPersonDesig}
                                        </p>
                                    </div>
                                    <p className="text-[17px] md:text-left md:mx-0 mx-2">
                                        &apos;&apos; {item.testimonialContent} &apos;&apos;
                                    </p>
                                </div>
                            </div>
                        ))}
                </div>
            </Layout>
        </>
    )
}

export default Testimonials;

export const getServerSideProps = async () => {
    let testimonial = null;

    var requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    fetch("https://yogayatra.in/api/admin/getAllTestimonials", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const data = JSON.parse(result);
            console.log(data.testimonials)
            testimonial = data.testimonials
        })
        .catch((error) => console.log("error", error));

    return {
        props: {
            testimonial,
        },
    };
}
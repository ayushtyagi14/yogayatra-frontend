import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Testimonials/Hero'
import TestimonialsComponent from '../components/Testimonials/TestimonialsComponent'

const Events = ({ props }) => {
    return (
        <>
            <Layout>
                <Hero />
                <TestimonialsComponent props={props} />
            </Layout>
        </>
    )
}

export default Events

export const getServerSideProps = async () => {
    let props = null;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    await fetch("https://yogayatra.in/api/admin/getAllTestimonials", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const data = JSON.parse(result);
            props = data.testimonials
        })
        .catch((error) => console.log("error", error));

    return {
        props: {
            props,
        },
    };
}

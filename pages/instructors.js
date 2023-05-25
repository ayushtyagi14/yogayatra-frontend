import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Instructors/Hero'
import InstructorsComponent from '../components/Instructors/InstructorsComponent'

const Instructors = ({ instructors }) => {
    return (
        <>
            <Layout title='Instructors | Yogayatra'>
                <Hero />
                <InstructorsComponent props={instructors} />
            </Layout>
        </>
    )
}

export default Instructors

export const getServerSideProps = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    const response = await fetch(
        process.env.BACKEND + "admin/getAllInstructors",
        requestOptions
    );

    const data = await response.json();

    return {
        props: {
            instructors: data.instructors,
        },
    };
}

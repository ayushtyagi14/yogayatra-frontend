import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Instructors/Hero'
import InstructorsComponent from '../components/Instructors/InstructorsComponent'

const Instructors = () => {
    return (
        <>
            <Layout title='Instructors | Yogayatra'>
                <Hero />
                <InstructorsComponent />
            </Layout>
        </>
    )
}

export default Instructors

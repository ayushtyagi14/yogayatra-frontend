import React from 'react'
import Layout from '../components/Layout/Layout'
import Hero from '../components/Events/Hero'
import EventsComponent from '../components/Events/EventsComponent'

const Events = ({ events }) => {
    return (
        <>
            <Layout title='Events | Yogayatra'>
                <Hero name="Events" isEvent={false} />
                <EventsComponent props={events} />
            </Layout>
        </>
    )
}

export default Events

export const getServerSideProps = async () => {
    let events = null;

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    await fetch("https://yogayatra.in/api/admin/getAllEvents", requestOptions)
        .then((response) => response.text())
        .then((result) => {
            const data = JSON.parse(result);
            events = data.events
        })
        .catch((error) => console.log("error", error));

    return {
        props: {
            events,
        },
    };
}

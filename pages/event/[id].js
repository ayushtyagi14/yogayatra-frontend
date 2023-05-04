import React from 'react'
import EventComponent from '../../components/Events/Event';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Events/Hero';

const SingleEvent = ({ event }) => {
    return (
        <>
            <Layout>
                <Hero name={event.eventName} isEvent={true} />
                <EventComponent props={event} />
            </Layout>
        </>
    )
}

export default SingleEvent;

export const getServerSideProps = async (context) => {
    let event = null;

    async function getSingleSession() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch(
            "http://yogayatra.in/api/admin/getSingleEvent/" + context.params.id,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                event = result.event;
            })
            .catch((error) => console.log("error", error));
    }
    await getSingleSession();

    return {
        props: {
            event,
        },
    };
}

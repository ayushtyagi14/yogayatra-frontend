import React from 'react'
import SessionComponent from '../../components/Sessions/SessionComponent';
import Layout from '../../components/Layout/Layout';
import Hero from '../../components/Sessions/Hero';

const SingleSession = ({ session }) => {
    return (
        <>
            <Layout title={`${session.sessionName} | Yogayatra`}>
                <Hero name={session.sessionName} isClass={true} />
                <SessionComponent props={session} />
            </Layout>
        </>
    )
}

export default SingleSession;

export const getServerSideProps = async (context) => {
    let session = null;

    async function getSingleSession() {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        await fetch(
            "https://yogayatra.in/api/admin/getSingleSession/" + context.params.id,
            requestOptions
        )
            .then((response) => response.json())
            .then((result) => {
                session = result.session;
            })
            .catch((error) => console.log("error", error));
    }
    await getSingleSession();

    return {
        props: {
            session,
        },
    };
}

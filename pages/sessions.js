import Layout from '../components/Layout/Layout';
import Hero from '../components/Sessions/Hero';
import SessionsComponent from '../components/Sessions/Sessions';

const Sessions = ({ sessions }) => {
    return (
        <>
            <Layout title='Sessions | Yogayatra'>
                <Hero name="Our Classes" isClass={false} />
                <SessionsComponent props={sessions} />
            </Layout>
        </>
    );
};
export default Sessions;

export const getServerSideProps = async () => {
    const requestOptions = {
        method: "GET",
        redirect: "follow",
    };

    const response = await fetch(
        "https://yogayatra.in/api/admin/getAllSessions",
        requestOptions
    );

    const data = await response.json();

    return {
        props: {
            sessions: data.sessions,
        },
    };
}

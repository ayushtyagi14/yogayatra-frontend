import Hero from '../components/Homepage/Hero';
import Layout from '../components/Layout/Layout';
import WhyYoga from '../components/Homepage/WhyYoga';
import Training from '../components/Homepage/Training';
import Class from '../components/Homepage/Class';
import Team from '../components/Homepage/Team';
import Testimonial from '../components/Homepage/Testimonial';
import Founders from '../components/Homepage/Founders';
import LookInside from '../components/Homepage/LookInside';
import WhatsApp from '../components/WhatsApp';


export default function Home({ instructors }) {

  return (
    <Layout
      title="Yogayatra"
      description="Discover the health benefits of yoga with Yogayatra, Coimbatore's leading yoga studio. Our expert instructors offer a range of yoga classes suitable for all levels, from beginners to advanced practitioners. Book your classes online now and experience the physical and mental benefits of yoga in a supportive and welcoming environment. Yogayatra is your ultimate destination for improving your overall health and well-being through the practice of yoga. Join us today and start your journey towards a healthier and happier you!"
    >
      <Hero />
      <WhyYoga />
      <WhatsApp />
      <Training />
      <Class />
      <Team props={instructors} />
      <Founders />
      <Testimonial />
      <LookInside />
    </Layout>
  )
}

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

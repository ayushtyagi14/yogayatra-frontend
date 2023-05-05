import Head from 'next/head';
import Hero from '../components/Homepage/Hero';
import Layout from '../components/Layout/Layout';
import WhyYoga from '../components/Homepage/WhyYoga';
import Training from '../components/Homepage/Training';
import Class from '../components/Homepage/Class';
import Team from '../components/Homepage/Team';
import Testimonial from '../components/Homepage/Testimonial';


export default function Home() {

  return (
    <Layout
      title="Yogayatra"
      description="Discover the health benefits of yoga with Yogayatra, Coimbatore's leading yoga studio. Our expert instructors offer a range of yoga classes suitable for all levels, from beginners to advanced practitioners. Book your classes online now and experience the physical and mental benefits of yoga in a supportive and welcoming environment. Yogayatra is your ultimate destination for improving your overall health and well-being through the practice of yoga. Join us today and start your journey towards a healthier and happier you!"
    >
      <Hero />
      <WhyYoga />
      <Training />
      <Class />
      <Team />
      <Testimonial />
    </Layout>
  )
}

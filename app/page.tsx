import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Alumni from "./components/Alumni";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Courses />
      <Alumni />
      <Process />
      <CTA />
      <Footer />
    </>
  );
}
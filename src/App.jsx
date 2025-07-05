import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import "./index.css";
import OurCourse from "./components/OurCourse";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About/>
      <OurCourse/>
      <Testimonials/>
      <Footer/>
    </>
  );
}


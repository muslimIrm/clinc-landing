import Container from "./components/common/Container";
import Header from "./components/common/Header";
import AboutUs from "./components/sections/aboutus/About";
import Contact from "./components/sections/contact/Contact";
import Doctors from "./components/sections/doctors/Doctors";
import Footer from "./components/sections/footer/Footer";
import FQAs from "./components/sections/FQAs/FQAs";
import Hero from "./components/sections/home/Hero";
import Services from "./components/sections/services/Services";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col" dir="rtl">
      <Header isHome={true} />
      <Hero />
      <AboutUs />
      <Services/>
      <FQAs/>
      <Contact/>
      <Doctors/>
      <Footer/>
    </div>
  );
}

import React from "react";
import HeroSection from "../components/HeroSection";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

function Home() {
  return (
	<div>
	  <HeroSection />
	  <Stats />
	  <Services />
	  <Projects />
	   <WhyChooseUs />
	  <Footer />
	  <ScrollToTop />
	</div>
  );
}

export default Home;
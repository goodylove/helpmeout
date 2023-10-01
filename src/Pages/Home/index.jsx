import Hero from "../../Components/Hero";
import NavBar from "./../../Components/Nav/index";
import Features from "./../../Components/Features/index";
import HowItWorks from "../../Components/Howitworks";
import Footer from "./../../Components/Footer/index";

function Home() {
  return (
    <div>
      <NavBar />

      <Hero />
      <Features />

      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;

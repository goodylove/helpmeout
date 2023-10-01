import Hero from "../../Components/Hero";
import NavBar from "./../../Components/Nav/index";
import Features from "./../../Components/Features/index";
import HowItWorks from "../../Components/Howitworks";
import Footer from "./../../Components/Footer/index";
import SectionApp from "./../../Components/sectionapp/index";
import ExtPopUp from "../../Components/expopup";
import Permision from "../../Components/permision";
import RecordScreen from "../../Components/recordscreen";
import Control from "../../Components/control";
import RecordSection from "../../Components/recordSection";

function Home() {
  return (
    <div>
      <NavBar />

      <Hero />
      <Features />

      <HowItWorks />
      <Footer />

      {/* <SectionApp />
      <ExtPopUp />

      <Permision />
      <RecordScreen />
      <Control />

      <RecordSection /> */}
    </div>
  );
}

export default Home;

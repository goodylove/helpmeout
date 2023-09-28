import { ICONS } from "../Constant/Icons";
import Logo from "./../../assets/Logo.png";

function Footer() {
  return (
    <section className="w-full  flex justify-center items-center bg-background  font-worksans  py-16">
      <div className="w-[90%] flex justify-center  items-center gap-8 ">
        <div className="flex justify-evenly   items-start w-full   text-white md:flex-row flex-col ">
          <img src={Logo} alt="logo" className="w-[150px] bg-white" />
          <div>
            <ul className="flex flex-col gap-3 mt-4">
              <li className="font-[700]">Menu</li>
              <li>Home</li>
              <li>Converter</li>
              <li>How it works</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 mt-4">
              <li className="font-[700]">About us</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col gap-3 mt-4">
              <li className="font-[700]">Screen Record</li>
              <li>Browser Window</li>
              <li>Desktop</li>
              <li>Application</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import Button from "../Button";
import { ICONS } from "../Constant/Icons";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function NavBar() {
  return (
    <nav className="flex  justify-between items-center w-full py-5 md:px-10 px-4">
      <img src={ICONS.biglogo} alt="" />
      <div className="md:flex items-center gap-10 leading-[18.77px] font-[600] font-worksans text-[16px] text-[#000000] hidden">
        <span>Feature</span>
        <span>How it Works</span>
      </div>
      <Button className="text-[#000000] font-[700] font-worksans hidden md:flex">
        Get Started
      </Button>

      <HiOutlineMenuAlt3 className="flex md:hidden  text-text text-[30px] cursor-pointer" />
    </nav>
  );
}

export default NavBar;

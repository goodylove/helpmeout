import Button from "../Button";
import { ICONS } from "../Constant/Icons";

function Hero() {
  return (
    <section className="flex justify-center  items-center px-10 mt-10 md:flex-col flex-col xl:flex-row lg:flex-row">
      <div className="lg:w-[48%] w-[71%]">
        <h2 className=" font-sora  font-[900]   md:font-[700] text-[27px]  md:text-[64px] leading-[34px]  md:leading-[64px]">
          Show Them Don’t Just Tell
        </h2>
        <p className=" font-inter md:leading-[28px]  font-[400] text-[12px] leading-[16px] md:text-[19px] md:py-4 py-2">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Button className="bg-[#120B48] text-[#ffff] font-worksans font-[500] w-[200px]  md:w-[239px] flex  gap-3 justify-center items-center p-3 rounded-[5px] my-3">
          Install HelpMeOut <span>&#8594;</span>
        </Button>
      </div>
      <div className="relative min-w-[52%] gap-4 md:mt-0 mt-14">
        <img
          src={ICONS.hero}
          alt="dot-2"
          className="absolute   right-[-19px] md:right-[-35px] md:top-[-40px]  z-[-1]  md:h-[294px] h-[140px] top-[-1rem] "
        />
        <div className="flex items-center ">
          <div className="flex flex-col gap-3 items-center justify-center">
            <img
              src={ICONS.Img1}
              alt="beautful-woman"
              className="w-[301px]  md:h-[214px] object-cover rounded-xl h-[109px]"
            />
            <img
              src={ICONS.Img2}
              alt="man and a child"
              className="w-[301px] md:h-[214px] rounded-xl object-cover h-[109px]"
            />
          </div>
          <img
            src={ICONS.Img3}
            alt="lady"
            className="w-[300px] md:h-[448px] object-cover ml-3 rounded-xl h-[214px]"
          />
          <img
            src={ICONS.hero2}
            alt="dot-1"
            className="absolute left-[-20px]  md:top-[14rem] z-[-1] md:h-[294px] h-[140px]   top-28"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

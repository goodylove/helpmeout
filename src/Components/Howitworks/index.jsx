import { IconBase } from "react-icons";
import { ICONS } from "./../Constant/Icons/index";
function HowItWorks() {
  return (
    <section
      className="flex justify-center items-center w-full px-10"
      id="how-it-work"
    >
      <div className="flex w-[90%] flex-col gap-7 justify-center items-center ">
        <h3 className="my-5 font-[700] text-[33px]  md:text-[40px] font-sora leading-[50.4px]">
          How It Works
        </h3>
        <div className="flex flex-col md:flex-col xl:flex-row lg:flex-row gap-5">
          <div className="flex justify-center flex-col  items-center gap-4">
            <img src={ICONS.one} alt="" className="w-[50px]" />
            <h2 className="md:text-[28px] text-[22px] leading-[33.89px] md:font-[600] font-[700] font-inter text-[#1B233D]">
              Record Screen
            </h2>
            <p className="md:text-[20px] text-[16px] leading-[24px]  md:leading-[30.26px]  font-[400] font-worksans    text-[#616163] text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={ICONS.howitwork} alt="" />
          </div>

          <div className="flex justify-center flex-col  items-center gap-4">
            <img src={ICONS.two} alt="" className="w-[50px]" />
            <h2 className="md:text-[28px] text-[22px] leading-[33.89px] md:font-[600] font-[700] font-inter text-[#1B233D]">
              Share Your Recording
            </h2>
            <p className="md:text-[20px] text-[16px] leading-[24px]  md:leading-[30.26px]  font-[400] font-worksans    text-[#616163] text-center">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={ICONS.howitwork} alt="" />
          </div>

          <div className="flex justify-center flex-col  items-center gap-4">
            <img src={ICONS.three} alt="" className="w-[50px]" />
            <h2 className="md:text-[28px] text-[22px] leading-[33.89px] md:font-[600] font-[700] font-inter text-[#1B233D]">
              Learn Effortlessly
            </h2>
            <p className="md:text-[20px] text-[16px] leading-[24px]  md:leading-[30.26px] font-[400] font-worksans    text-[#616163] text-center">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={ICONS.howitwork} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

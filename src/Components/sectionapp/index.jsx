import Button from "../Button";
import { ICONS } from "../Constant/Icons/index";

function SectionApp() {
  return (
    <>
      <section className="flex w-full justify-center items-center flex-col md:px-10 py-5 mt-4 ">
        <div className="flex justify-between  items-center  w-[90%] ">
          <div className="flex justify-start flex-col items-center w-full">
            <div className="flex items-center  gap-8  justify-around  w-full">
              <img
                src={ICONS.biglogo}
                alt="logo"
                className="md:w-[300px] my-2 w-[200px]"
              />
              <Button className="text-blue-4000 bg-[#0E75C5] text-[#fff] rounded p-2   font-inter md:text-[16px]  text-[6px]">
                Add to Chrome
              </Button>
            </div>
            <div className=" md:w-[55%] flex flex-col md:ml-9  ml-18 w-[89%]">
              <div className="flex gap-3  my-2 ">
                <div className="flex gap-2">
                  <img src={ICONS.goo} alt="help" className="w-[20px]" />
                  <span className="text-[#0E75C5] text-[14px] md:text-[20px] font-[700] leading-[23.46px] font-worksans">
                    Helpmeout.com
                  </span>
                </div>
                <div className="flex gap-2">
                  <img src={ICONS.fea} alt="help" className="w-[20px] " />
                  <span className="text-[#0E75C5] text-[14px]  md:text-[20px] font-[700] leading-[23.46px] font-worksans">
                    Featured
                  </span>
                </div>
              </div>

              <div className="flex  mt-4 md:gap-2 items-center gap-[3px]">
                <img src={ICONS.star} alt="" className="w-[17px]" />
                <img src={ICONS.star} alt="" className="w-[17px]" />
                <img src={ICONS.star} alt="" className="w-[17px]" />
                <img src={ICONS.star} alt="" className="w-[17px]" />
                <img src={ICONS.star} alt="" className="w-[17px]" />
                <span className="text-[#000000] text-[12px] md:text-[18px] font-worksans">
                  252
                </span>
                <img src={ICONS.gray} alt="" className="w-[18px]" />
                <div className="h-[20px] w-[2px] bg-[#606060]"></div>
                <span className="text-[#0E75C5]  font-worksans leading-[21.11px] md:text-[18px] text-[12px]">
                  {" "}
                  Productivity
                </span>
                <div className="h-[20px] w-[2px] bg-[#606060]"></div>

                <span className=" font-worksans md:leading-[21.11px] text-[6px]  md:text-[18px] font-[400]">
                  80,000+ users
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* new line */}
        <div className="w-[80%] h-[1px] bg-[#E8E8E8] mt-5"></div>
        <div
          className="flex md:gap-5  gap-3 mt-10 tetx-[ #606060] font-worksans font-[500] text-[12px] md:text-[20px] leading-[23.46px] items-center
"
        >
          <span className="text-[#0E75C5] rounded-full   border  shadow-lg  p-2">
            Overview
          </span>
          <span>Privacy practices</span>
          <span> Review</span>
          <span>Related</span>
        </div>
      </section>
      <section className="flex justify-center w-full items-center mt-14 bg-[#F0F0F0] pt-10  px-5">
        <div className="w-[80%]">
          <div className="flex w-full justify-center items-center md:gap-5 gap-2 ">
            <img src={ICONS.less} alt="prev" className="w-[40px]" />
            <img
              src={ICONS.webs}
              alt="section"
              className="md:w-[700px] w-[290px]"
            />
            <img src={ICONS.great} alt="next" className="w-[40px]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionApp;

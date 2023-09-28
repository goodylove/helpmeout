import { ICONS } from "./../Constant/Icons/index";

function Features() {
  return (
    <section className="flex justify-center items-center w-full bg-[#F4F6F8] py-10 my-28">
      <div className="bg-[#FFFF] w-full flex justify-center items-center">
        <div className="w-[90%]">
          <div className="flex flex-col justify-center items-center">
            {" "}
            <h3 className="font-[700]  font-sora text-[30px]  leading-[50px]">
              Feature
            </h3>
            <p className="text-[20px] font-worksans leading-[30.26px]">
              Key Highlights of Our Extension
            </p>
          </div>

          <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center items-center gap-10 py-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <img
                  src={ICONS.simple}
                  alt="simple screen recording"
                  className="w-[40px]"
                />
                <div>
                  <span className="md:font-[600]  font-[700] font-inter leading-[33.87px] md:text-[28px] text-[20px]">
                    {" "}
                    Simple Screen Recording
                  </span>
                  <p className="md:text-[20px] text-[13px] font-worksans font-[400] leading-[20px]  md:leading-[30.26px] text-[#616163] md:w-[484px]">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={ICONS.easyshare} alt="" className="w-[40px]" />
                <div>
                  <span className="md:font-[600]  font-[700] font-inter leading-[33.87px] md:text-[28px] text-[20px]">
                    {" "}
                    Easy-to-Share URL
                  </span>
                  <p className="md:text-[20px] text-[13px] font-worksans font-[400] leading-[20px]  md:leading-[30.26px] text-[#616163] md:w-[484px]">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <img src={ICONS.revisiterecord} alt="" className="w-[40px]" />
                <div>
                  <span className="md:font-[600]  font-[700] font-inter leading-[33.87px] md:text-[28px] text-[20px]">
                    Revisit Recordings
                  </span>
                  <p className="md:text-[20px] text-[13px] font-worksans font-[400] leading-[20px]  md:leading-[30.26px] text-[#616163] md:w-[484px]">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>

            <img src={ICONS.feature} alt="highligt" className="w-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

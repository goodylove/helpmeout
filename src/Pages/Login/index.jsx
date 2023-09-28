import Logo from "./../../assets/Logo.png";
import Button from "./../../Components/Button/index";
import { ICONS } from "./../../Components/Constant/Icons/index";

export const SignIn = () => {
  return (
    <section className="flex  w-full justify-center  items-center h-[100vh]">
      <div className="w-[90%] flex justify-center items-center">
        <div className="w-full">
          <div className="flex justify-start items-center w-full">
            <img src={ICONS.biglogo} alt="logo" />
          </div>

          <div className="flex justify-center items-center flex-col gap-3">
            <h4 className="  text-text  font-inter text-[32px] font-[700]">
              Log in or Sign up
            </h4>
            <p className="text-center w-[321px] text-[14px] font-[300] leading-[21px] font-worksans">
              Join millions of others in sharing successful moves on HelpMeOut.
            </p>

            <Button className="border-[2px]  rounded-[10px] w-[300px]  gap-3 flex  justify-center items-center px-2 py-1">
              <img src={ICONS.google} alt="facebook" className="w-[20px]" />
              <span className="text-[13px]"> Continue with Google</span>
            </Button>
            <Button className="border-[2px]  rounded-[10px] w-[300px]  gap-3 flex  justify-center items-center px-2 py-1">
              <img src={ICONS.facebook} alt="facebook" className="w-[20px]" />
              <span className="text-[13px]"> Continue with Facebook</span>
            </Button>
            <div className="w-[438px] flex justify-center items-center  gap-3 my-5">
              <div className="w-[110px] h-[2px] bg-[#B9C2C8]"></div>
              <span> or</span>
              <div className="w-[110px] h-[2px]  bg-[#B9C2C8]"></div>
            </div>

            {/* email */}

            <form action="" className="">
              <div className="flex flex-col my-1">
                <label
                  htmlFor="email"
                  className=" font-worksans font-[700] text-[14px] py-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email address "
                  className="w-[300px] border-[2px]  p-1  border-[#B9C2C8] font-[500] text-[#141414] rounded-xl"
                />
              </div>
              <div className="flex flex-col  my-1">
                <label
                  htmlFor="email "
                  className=" font-worksans font-[700] leading-[16.52px] py-2 text-[#141414]"
                >
                  {" "}
                  Password
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your password"
                  className="w-[300px] border-2  p-1  rounded-xl border-[#B9C2C8] "
                />
              </div>
              <Button className="bg-background   w-[300px] text-white p-1 rounded-[5px] mt-3">
                <div className=" text-[#FFFF] font-worksans">Sign Up</div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

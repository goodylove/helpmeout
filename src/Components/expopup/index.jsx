import { useNavigate } from "react-router-dom";
import { ICONS } from "./../Constant/Icons/index";

const detail = [
  {
    img: ICONS.logo,
    pin: ICONS.pin,
    name: "helpmeout",
    more: ICONS.more,
  },
  {
    img: ICONS.ex1,
    pin: ICONS.pin,
    name: "MetaMask",
    more: ICONS.more,
  },
  {
    img: ICONS.ex2,
    pin: ICONS.pin,
    name: "Binance Wallet",
    more: ICONS.more,
  },
  {
    img: ICONS.ex3,
    pin: ICONS.pin,
    name: "Framer",
    more: ICONS.more,
  },
];

function ExtPopUp() {
  const navigate = useNavigate();
  return (
    <div className="flex  md:justify-end md:pr-8 mt-3  extension justify-center">
      <div className="border-2 w-[400px] h-[404px]  py-6 rounded-md shadow-2xl ">
        <div className="flex justify-between px-3">
          <div className="text-[18px] font-inter font-[400]">Extension</div>
          <img src={ICONS.close} alt="" />
        </div>
        <div className="my-6 px-3">
          <h3 className="text-[600] font-sora leading-[15.12px]">
            Full Access
          </h3>
          <p className="font[400] text-[14px] font-worksans leading-[16px] text-[#626262] py-1">
            {" "}
            These extensions can see and change information on this site{" "}
          </p>
        </div>

        <ul className="flex flex-col gap-8 px-3 mb-3">
          {detail.map((item) => {
            return (
              <li
                onClick={
                  item.name === "helpmeout"
                    ? () => navigate("/recordscreen")
                    : ""
                }
                key={item.name}
                className="flex justify-between items-center  cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={item.img} alt="" className="w-[20px]" />
                  <span className="font[400] text-[16px] font-worksans leading-[18px]">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <img src={item.pin} alt="" />
                  <img src={item.more} alt="" />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-[100%] h-[2px] bg-[#878787]"></div>
        <div className="flex px-3 gap-3 my-3">
          <img src={ICONS.ex5} alt="" />
          <span className="text-[#141414] font-[400] text-[14px] font-worksans">
            Manage extensions
          </span>
        </div>
      </div>
    </div>
  );
}

export default ExtPopUp;

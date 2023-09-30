import Button from "../Button";
import { ICONS } from "../Constant/Icons";

function Permision() {
  return (
    <div className="flex   relative">
      <div className="w-full h-[1px]  my-8 bg-[#878787]"></div>
      <div className="border w-[400px] h-[200px] rounded m-4 absolute z-[1] bg-[#FFFF] left-10">
        <div className="flex justify-between px-6 py-2 ">
          <span className=" font-inter text-[14px] font-[400]">
            HelpMeOut wants to
          </span>
          <img src={ICONS.ex5} alt="" />
        </div>
        {/* camerea */}
        <div className="flex pl-6 py-4 gap-3">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
                stroke="#878787"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19.5202 17.0999L16.7402 15.1499V8.83989L19.5202 6.88989C20.8802 5.93989 22.0002 6.51989 22.0002 8.18989V15.8099C22.0002 17.4799 20.8802 18.0599 19.5202 17.0999Z"
                stroke="#878787"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
                stroke="#878787"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <span className=" font-inter font-[400] text-[14px]">
            Use your camera
          </span>
        </div>
        {/* mic */}
        <div className="flex pl-6 gap-3">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5V6C7.25 3.38 9.38 1.25 12 1.25C14.62 1.25 16.75 3.38 16.75 6V11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 2.75C10.21 2.75 8.75 4.21 8.75 6V11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5V6C15.25 4.21 13.79 2.75 12 2.75Z"
                fill="#878787"
              />
              <path
                d="M12.0001 19.7499C7.3701 19.7499 3.6001 15.9799 3.6001 11.3499V9.6499C3.6001 9.2399 3.9401 8.8999 4.3501 8.8999C4.7601 8.8999 5.1001 9.2399 5.1001 9.6499V11.3499C5.1001 15.1499 8.2001 18.2499 12.0001 18.2499C15.8001 18.2499 18.9001 15.1499 18.9001 11.3499V9.6499C18.9001 9.2399 19.2401 8.8999 19.6501 8.8999C20.0601 8.8999 20.4001 9.2399 20.4001 9.6499V11.3499C20.4001 15.9799 16.6301 19.7499 12.0001 19.7499Z"
                fill="#878787"
              />
              <path
                d="M13.3899 7.18007C13.3099 7.18007 13.2199 7.17007 13.1299 7.14007C12.3999 6.87007 11.5999 6.87007 10.8699 7.14007C10.4799 7.28007 10.0499 7.08007 9.90988 6.69007C9.76988 6.30007 9.96988 5.87007 10.3599 5.73007C11.4199 5.35007 12.5899 5.35007 13.6499 5.73007C14.0399 5.87007 14.2399 6.30007 14.0999 6.69007C13.9799 6.99007 13.6899 7.18007 13.3899 7.18007Z"
                fill="#878787"
              />
              <path
                d="M12.8001 9.30007C12.7301 9.30007 12.6701 9.29007 12.6001 9.27007C12.2001 9.16007 11.7901 9.16007 11.3901 9.27007C10.9901 9.38007 10.5801 9.14007 10.4701 8.74007C10.3601 8.35007 10.6001 7.94007 11.0001 7.83007C11.6501 7.65007 12.3501 7.65007 13.0001 7.83007C13.4001 7.94007 13.6401 8.35007 13.5301 8.75007C13.4401 9.08007 13.1301 9.30007 12.8001 9.30007Z"
                fill="#878787"
              />
              <path
                d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V19C11.25 18.59 11.59 18.25 12 18.25C12.41 18.25 12.75 18.59 12.75 19V22C12.75 22.41 12.41 22.75 12 22.75Z"
                fill="#878787"
              />
            </svg>
          </span>
          <span className=" font-inter font-[400] text-[14px]">
            Use your microphone
          </span>
        </div>
        <div className="flex justify-end items-end pr-4 mt-7 gap-4">
          <Button className="rounded-[4px] border-[0.5px] p-[10px] text-[13px] font-inter">
            Allow
          </Button>
          <Button className="rounded-[4px] border-[0.5px] p-[10px] text-[13px] font-inter">
            Block
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Permision;

import { ICONS } from "../Constant/Icons";

function RecordSection() {
  return (
    <section className="w-full flex justify-center  h-screen">
      {/* sidebar */}

      <div className="w-[40%] border-2">
        <div className="flex gap-2 px-3">
          <div className="h-5 w-5 rounded-full flex justify-center items-center bg-[#9999] ">
            <span className=" text-[#ffff]">X</span>
          </div>
          <img src={ICONS.facebook} alt="" />
        </div>
        <h3>Create new listening</h3>
      </div>
      {/* side bar ends here */}
      {/* main */}
      <div className="w-[60%] border-2"></div>
      {/* main ends here */}
    </section>
  );
}

export default RecordSection;

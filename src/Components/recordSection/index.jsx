import { ICONS } from "../Constant/Icons";
import Control from "./../control/index";

function RecordSection() {
  return (
    <section className="w-full flex justify-start items-end  h-screen bg-[#ffff]">
      <div className="flex w-full gap-2">
        <div>
          <img src={ICONS.man} alt="" />
        </div>
        <Control />
      </div>
    </section>
  );
}

export default RecordSection;

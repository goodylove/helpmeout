import Button from "../Button";
import { ICONS } from "../Constant/Icons/index";

function SectionApp() {
  return (
    <section className="flex w-full justify-center items-center">
      <div>
        <div>
          <img src={ICONS.l} alt="" />
          heloo
          <Button className="text-blue-4000">Add to Chrome</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionApp;

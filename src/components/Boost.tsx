import { Link } from "react-router-dom";

function Boost() {
  return (
    <div className="flex flex-col items-center gap-[16px] md:gap-[32px] bg-[#3A3054] py-[57px]">
      <h2 className="text-[#ffffff] md:text-[40px]  text-[28px] font-bold leading-[48px] ">
        Boost your links today
      </h2>
      <Link
        to="/"
        className="pt-[14px] hover:bg-[#9AE3E3] text-[#ffffff] pb-[12px] px-[40px] bg-[#2BD0D0] rounded-[28px] text-[20px] font-bold leading-[30px]"
      >
        Get Started
      </Link>
    </div>
  );
}

export default Boost;

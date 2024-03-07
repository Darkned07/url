import { Link } from "react-router-dom";

function SupNav() {
  return (
    <div className="my-[40px] flex flex-col gap-[20px] md:flex-row-reverse md:justify-between">
      <img src="./images/bg.svg" alt="" />
      <div className="flex flex-col gap-[15px] items-center md:items-start">
        <h2 className="text-[#34313D] md:text-[80px] md:leading-[90px] md:tracking-[-2px] font-bold text-[42px] md:text-start leading-[48px] text-center tracking-[-1px]">
          More than just shorter links
        </h2>
        <p className="text-center md:text-[22px] md:leading-[36px] md:text-start leading-[30px] text-[18px] font-medium text-[#9E9AA8]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link
          className="mt-[15px] pt-[14px] pb-[12px] px-[40px] bg-[#2BD0D0] text-[#ffffff] rounded-[28px] text-[20px] font-bold leading-[30px] hover:bg-[#9AE3E3]"
          to="/"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default SupNav;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-row  justify-between items-center px-[24px] pt-[40px] max-container">
      <Link to="/">
        <img
          className="w-[120px] mr-[46px] h-[33px]"
          src="./images/Shortly.svg"
          alt=""
        />
      </Link>
      <nav className="hidden md:block mr-auto">
        <ul className="flex flex-row gap-[29px]">
          <li>
            <Link
              className="text-[#9E9AA8] hover:text-[#34313C] text-[15px] leading-[23px]  font-bold"
              to="/features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              className="text-[#9E9AA8] hover:text-[#34313C]  text-[15px] leading-[23px]  font-bold"
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="text-[#9E9AA8] hover:text-[#34313C]  text-[15px] leading-[23px]  font-bold"
              to="/resources"
            >
              Resources
            </Link>
          </li>
        </ul>
      </nav>
      <div className="md:flex flex-row gap-[37px] items-center hidden ">
        <Link
          className="text-[#9E9AA8] text-[15px] font-bold leading-[23px] "
          to="/login"
        >
          Login
        </Link>
        <Link
          className="py-[9px] hover:bg-[#9AE3E3] px-[24px] rounded-[28px] text-[15px] font-bold leading-[23px]  bg-[#2BD0D0] text-[#ffffff]"
          to="/signup"
        >
          Sign Up
        </Link>
      </div>
      <button className="md:hidden">
        <img src="./images/Group.png" alt="" />
      </button>
    </div>
  );
}

export default Navbar;

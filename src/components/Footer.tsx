import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="max-container py-[56px] flex  flex-col items-center gap-[47px] md:flex-row md:justify-between md:items-start">
      <Link to="/">
        <img src="./images/Foot.svg" alt="" />
      </Link>
      <ul className="flex flex-col gap-[38px] items-center md:ml-auto md:flex-row md:items-start">
        <li className="flex flex-col items-center gap-[10px] md:items-start">
          <h2 className="text-[#ffffff] text-[16px] font-bold leading-[24px] ">
            Features
          </h2>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[]"
            to="/"
          >
            Link Shortening
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Branded Links
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Analytics
          </Link>
        </li>
        <li className="flex flex-col items-center gap-[10px] md:items-start">
          <h2 className="text-[#ffffff] text-[16px] font-bold leading-[24px] ">
            Features
          </h2>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Blog
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Developers
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Support
          </Link>
        </li>
        <li className="flex flex-col items-center gap-[10px] md:items-start">
          <h2 className="text-[#ffffff] text-[16px] font-bold leading-[24px] ">
            Features
          </h2>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            ABout
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Our Team
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Careers
          </Link>
          <Link
            className="hover:text-[#2BD0D0] text-[#BFBFBF]  text-[15px] font-medium leading-[23px]"
            to="/"
          >
            Contact
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-[24px] items-center ml-[20px]">
        <li>
          <Link to="/">
            <img src="./images/face.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./images/twi.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./images/pin.svg" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./images/ins.svg" alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;

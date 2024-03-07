function Res() {
  return (
    <div className="flex flex-col gap-[48px] my-[40px] ">
      <div className="flex flex-col gap-[16px] items-center ">
        <h2 className="text-[#34313D] text-[28px] font-bold leading-[48px] md:text-[40px] ">
          Advanced Statistics
        </h2>
        <p className="text-center text-[16px] font-medium leading-[28px] text-[#9E9AA8] md:text-[18px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col items-center justify-end  md:flex-row mt-[40px]">
        <div className="px-[32px] md:items-start pb-[41px] pt-[77px] bg-[#ffffff] flex flex-col items-center gap-[10px] relative shadow-2xl rounded-[5px]">
          <div className="p-[24px] rounded-[100%] bg-[#3A3054] absolute md:left-[20px] top-[-40px]">
            <img src="./images/res1.svg" alt="" />
          </div>
          <h2 className="text-[22px] font-bold leading-[33px] text-[#34313D]">
            Brand Recognition
          </h2>
          <p className="text-[15px] md:text-start font-medium leading-[26px] text-center text-[#9E9AA8]">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <hr className="w-[8px] md:w-[100px] md:h-[8px] mb-[30px] h-[55px] bg-[#2BD0D0]" />
        <div className="px-[32px] md:items-start pb-[41px] pt-[77px] mt-[44px] bg-[#ffffff] flex flex-col items-center gap-[10px] relative shadow-2xl rounded-[5px]">
          <div className="p-[24px] rounded-[100%] bg-[#3A3054] md:left-[20px] absolute top-[-40px]">
            <img src="./images/res2.svg" alt="" />
          </div>
          <h2 className="text-[22px] font-bold leading-[33px] text-[#34313D]">
            Detailed Records
          </h2>
          <p className="text-[15px] md:text-start font-medium leading-[26px] text-center text-[#9E9AA8]">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <hr className="w-[8px] md:w-[100px] md:h-[8px] mb-[30px] h-[55px] bg-[#2BD0D0]" />
        <div className="px-[32px] md:items-start pb-[41px] pt-[77px] mt-[88px] bg-[#ffffff] flex flex-col items-center gap-[10px] relative shadow-2xl rounded-[5px]">
          <div className="p-[24px] rounded-[100%] md:left-[20px] bg-[#3A3054] absolute top-[-40px]">
            <img src="./images/res3.svg" alt="" />
          </div>
          <h2 className="text-[22px] font-bold leading-[33px] text-[#34313D]">
            Fully Customizable
          </h2>
          <p className="text-[15px] md:text-start font-medium leading-[26px] text-center text-[#9E9AA8]">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Res;

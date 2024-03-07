function Search() {
  return (
    <div className="bg-[#3A3054] p-[24px] rounded-[10px] my-[120px]">
      <form className="flex flex-col md:flex-row gap-[10px]  md:justify-around">
        <input
          type="url"
          className="py-[6px] md:mx pl-[16px] w-full text-[16px] font-medium leading-[36px] outline-white  rounded-[5px]"
          placeholder="Shorten a link here..."
        />
        <button className="py-[11px]  md:py-[17px] md:px-[41px] hover:bg-[#9AE3E3] md:text-[20px] bg-[#2BD0D0] rounded-[5px] text-[18px] leading-[27px] font-bold text-[#ffffff]">
          Shorten It!
        </button>
      </form>
    </div>
  );
}

export default Search;

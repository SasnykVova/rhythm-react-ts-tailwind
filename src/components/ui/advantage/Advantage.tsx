import React from "react";

interface AdvantageProps {
  title: string;
  text: string;
  imgUrl: string;
}

const Advantage: React.FC<AdvantageProps> = ({ title, text, imgUrl }) => {
  return (
    <>
      <div className="flex flex-col flex-[0_1_33.33%] items-center max-m:flex-[0_0_calc(50%-3rem)] max-s:flex-[0_0_100%]">
        <div className="p-[1.25rem] bg-[#262626] rounded-[20px] mb-[2.5rem]">
          <img src={imgUrl} alt="Browsing logo" />
        </div>
        <div className="pb-[12px] font-semibold tx-[1.125rem] uppercase text-white tracking-wider">
         {title}
        </div>
        <div className=" text-center capitalize">
          {text}
        </div>
      </div>
    </>
  );
};

export default Advantage;

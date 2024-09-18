import React from "react";

interface FilterBlockProps {
    title: string
}

const FilterBlock: React.FC<FilterBlockProps> = ({title}) => {
  return (
    <>
      <div className="flex justify-between text-[1.25rem] pt-[5.75rem] pb-[2rem]">
        <h3 className="text-[#121212] font-semibold tracking-widest">
          {title}
        </h3>
        <button className="text-[#868686] font-medium">view all</button>
      </div>
    </>
  );
};

export default FilterBlock;

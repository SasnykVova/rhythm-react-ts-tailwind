import React from "react";

interface ListItemBlockProps {
  id?: number;
  name: string;
  price: string;
  imgUrl: string;
}

const ListItemBlock: React.FC<ListItemBlockProps> = ({
  id,
  name,
  price,
  imgUrl,
}) => {
  return (
    <>
      <div className="flex-[0_0_calc(33.33%-54px)] max-l:flex-[0_0_calc(50%-54px)] max-s:flex-[0_0_calc(100%)]">
        <div className="rounded-2xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={imgUrl}
            alt="Guitar"
          />
        </div>
        <div className="pt-[2.5rem] text-[#121212] font-medium">{name}</div>
        <div className="pt-[0.43rem] text-sm">{price}</div>
      </div>
    </>
  );
};

export default ListItemBlock;

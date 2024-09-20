import React from "react";


interface TitleBlockProps {
  children: React.ReactNode;
  iswhite?: boolean
}

const TitleBlock: React.FC<TitleBlockProps> = ({ children , iswhite = false}) => {
  return (
    <>
        <h2
          className={`title flex justify-center gap-2 ${iswhite ? 'text-white' : 'text-[#121212]'} text-[#121212] font-[CalSans] font-semibold leading-normal text-[2.75rem] 
                max-m:text-[1.8rem] max-s:text-[1.4rem]`}
        >
          {children}
        </h2>
    </>
  );
};

export default TitleBlock;

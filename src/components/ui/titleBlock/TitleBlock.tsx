import React from "react";


interface TitleBlockProps {
  children: React.ReactNode;
}

const TitleBlock: React.FC<TitleBlockProps> = ({ children }) => {
  return (
    <>
        <h2
          className={`title flex justify-center gap-2 text-[#121212] font-[CalSans] font-semibold leading-normal text-[2.75rem] 
                max-m:text-[1.8rem] max-s:text-[1.4rem]`}
        >
          {children}
        </h2>
    </>
  );
};

export default TitleBlock;

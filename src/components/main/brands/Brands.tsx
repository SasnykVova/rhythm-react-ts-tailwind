import React from "react";
import Wrapper from "../../ui/wrapper/Wrapper";
import TitleBlock from "../../ui/titleBlock/TitleBlock";
import brand1 from '../../../assets/img/brands/1.svg';
import brand2 from '../../../assets/img/brands/2.svg';
import brand3 from '../../../assets/img/brands/3.svg';
import brand4 from '../../../assets/img/brands/4.svg';
import brand5 from '../../../assets/img/brands/5.svg';
import brand6 from '../../../assets/img/brands/6.svg';
import brand7 from '../../../assets/img/brands/7.svg';
import brand8 from '../../../assets/img/brands/8.svg';


const Brands: React.FC = () => {
  return (
    <>  
      <Wrapper>
        <section className="pt-[13.75rem] max-l:pt-[10rem] max-m:pt-[7rem] max-s:pt-[5rem]">
            <TitleBlock>Featuring the<span>Best Brands</span></TitleBlock>
            <div className="px-[5.56rem] py-[4.68rem] grid grid-cols-4 grid-rows-2 gap-x-[160px] gap-y-[80px]
            max-xl:grid-cols-3 max-xl:gap-x-[80px] max-xl:gap-y-[40px] max-m:grid-cols-2 max-m:px-[3rem] max-s:grid-cols-1 max-s:px-[3rem]">
                <div><img className="w-full h-full" src={brand1} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand2} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand3} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand4} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand5} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand6} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand7} alt="Brand Logo"/></div>
                <div><img className="w-full h-full" src={brand8} alt="Brand Logo"/></div>
            </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Brands;

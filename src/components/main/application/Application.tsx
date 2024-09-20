import React from "react";
import Wrapper from "../../ui/wrapper/Wrapper";
import google from "../../../assets/img/application/1.svg";
import apple from "../../../assets/img/application/2.svg";
import mobileApp from "../../../assets/img/application/img.png";

const Application: React.FC = () => {
  return (
    <>
      <Wrapper>
        <section className="pt-[15rem] px-4 max-m:pt-[10rem] max-s:pt-[5rem]">
          <div className="flex items-center max-l:flex-col">
            <div className="flex-[0_0_50%] pr-[2rem] flex flex-col justify-center max-m:pr-0">
              <div
                className="title flex-wrap text-[#121212] font-[CalSans] font-semibold leading-normal text-[2.75rem] 
                max-l:flex max-l:justify-center max-l:break-words max-m:text-[1.5rem] max-s:text-[1.5rem] mb-[3.75rem]"
              >
                Browse and buy your <span>favorite guitars</span> with Rhythm.
              </div>
              <div className="flex gap-[1.625rem] max-l:justify-center max-s:flex-col  max-s:justify-center  max-s:items-center">
                <div className="">
                  <img
                    className="max-w-full"
                    src={google}
                    alt="Play store"
                  />
                </div>
                <div className="">
                  <img
                    className="max-w-full"
                    src={apple}
                    alt="Play store"
                  />
                </div>
              </div>
            </div>
            <div className="flex-[0_0_50%]">
                <div className=" relative">
                    <img className="" src={mobileApp} alt="Mobile app"/>
                </div>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Application;

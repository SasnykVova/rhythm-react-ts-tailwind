import React from 'react';


interface FeedbackProps {
    text: string
    name: string
    position: string
    imgUrl: string
}
const Feedback: React.FC<FeedbackProps> = ({text, name, position, imgUrl}) => {
    return (
        <>
            <div className="grid grid-cols-2 max-m:grid-cols-[auto,1fr] max-m:gap-x-[0.8rem] max-s:grid-cols-1">
                    <div className="flex justify-center items-center max-s:mb-[2rem] overflow-hidden">
                        <div className=" w-[330px] h-[330px] relative max-m:w-[200px] max-m:h-[200px] 
                                        avatar-decor">
                            <img className=" absolute top-0 left-0 w-full h-full object-cover rounded-[50%] z-10" src={imgUrl} alt="Customers avatar" />
                        </div>
                  </div>
                  <div className="p-[2rem] flex flex-col justify-between max-l:p-[1.5rem] max-m:p-0 max-s:justify-center max-s:text-center">
                    <div className="mb-[56px] text-[1.5rem] leading-[160%] max-l:text-[1.2rem] max-l:leading-[120%] max-m:mb-[15px] max-m:text-[1rem] max-m:leading-[100%]">
                      {text}
                    </div>
                    <div>
                        <div className="text-black text-[1.5rem] leading-[160%] font-semibold max-s:text-[1.2rem]">{name}</div>
                        <div className="text-[1.125rem] text-[#868686] font-medium leading-[160%] 
                        tracking-wider max-s:text-[1rem]">{position}</div>
                    </div>
                  </div>
                </div>
        </>
    );
}

export default Feedback;

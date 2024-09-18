import React from 'react';
import Wrapper from '../../ui/wrapper/Wrapper';
import mainDecor from '../../../assets/img/main/main-decor.png';
import googlePlay from '../../../assets/img/main/google.svg';
import appleLogo from '../../../assets/img/main/apple.svg';
import decor from '../../../assets/img/main/decor.svg';



const Greet: React.FC = () => {
    return (
        <>
        <div>
            <Wrapper>
                <div className='flex'>
                    <div className='pt-[14.68rem] grow-0 shrink basis-2/4 max-l:basis-2/3 max-m:basis-full max-m:pt-[10rem]'>
                        <h1 className='font-[CalSans] text-[#121212] text-[3.5rem] font-semibold mb-[1rem] max-s:text-[2.5rem]'>Browse top quality <span className='text-[#FF6428]'>Guitars</span> online</h1>
                        <p className='font-medium mb-[2.06rem] max-w-[400px]'>Explore 50k+ latest collections of branded guitars online with Rhythm.</p>
                        <div className='flex items-center gap-[2.5rem]'>
                            <a className='py-[1.125rem] px-[3rem] rounded-[40px] bg-[#FF6428] text-white font-semibold max-s:text-[0.8rem] max-s:py-[0.8rem] max-s:px-[2rem]' href='http://localhost:3000/'>Get the App</a>
                            <div className='flex gap-[1.735rem]'>
                                <div><img src={googlePlay} alt='Google play logo'/></div>
                                <div><img src={appleLogo} alt='Apple logo'/></div>
                            </div>
                        </div>
                    </div>
                    <div className='grow-0 shrink basis-2/4 max-l:basis-1/3 max-m:hidden'>
                        <div className='mr-[-135px] inline-block relative decor-after'><img src={mainDecor} alt='Main decor'/></div>
                    </div>
                </div>
            </Wrapper>
        </div>
        </>
    );
}

export default Greet;


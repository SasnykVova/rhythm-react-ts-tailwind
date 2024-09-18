import React from 'react';
import Wrapper from '../../ui/wrapper/Wrapper';
import TitleBlock from '../../ui/titleBlock/TitleBlock';
import acustic from '../../../assets/img/categories/electric.jpg'
import basses from '../../../assets/img/categories/collections.jpg'
import collections from '../../../assets/img/categories/collections.jpg'


const Categories: React.FC = () => {

    const categoriesData = [
        {id: 1, text: 'Acoustic', imgUrl: `${acustic}`},
        {id: 2, text: 'Electric', imgUrl: `${acustic}`},
        {id: 3, text: 'Basses', imgUrl: `${basses}`},
        {id: 4, text: 'Collections', imgUrl: `${collections}`},
    ]

    return (
        <>
        <Wrapper>
            <section className='pt-[11.25rem] max-l:pt-[5rem]'>
                <TitleBlock>Choose based on <span>Categories</span></TitleBlock>
                <div className='grid grid-cols-4 gap-x-[69px] gap-y-[2.5rem] pt-[5rem] px-[3.5rem] max-l:grid-cols-2 max-l:pt-[2.5rem] max-l:px-[1.5rem]  max-s:grid-cols-1 '>                  
                        <div className='relative arounded-[20px] oveflow-hidden'> 
                            <div className=''><img className='absolute h-full w-full top-0 left-0 object-cover' src={acustic} alt='Giutar'/></div>
                            <p className='text-white text-[20px] font-semibold absolute bottom-0 left-0 text-center'>Acoustic</p>
                        </div>
                        <div className='relative'> 
                            <img className='h-full w-full' src={acustic} alt='Giutar'/>
                            <p className='text-white text-[20px] font-semibold absolute bottom-[30px] left-[30%]'>Acoustic</p>
                        </div>
                        <div className='relative'> 
                            <img className='h-full w-full' src={acustic} alt='Giutar'/>
                            <p className='text-white text-[20px] font-semibold absolute bottom-[30px] left-[30%]'>Acoustic</p>
                        </div>
                        <div className='relative'> 
                            <img className='h-full w-full' src={acustic} alt='Giutar'/>
                            <p className='text-white text-[20px] font-semibold absolute bottom-[30px] left-[30%]'>Acoustic</p>
                        </div>                 
                </div>
            </section>
        </Wrapper>
        </>
    );
}

export default Categories;

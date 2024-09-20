import React from 'react';
import Wrapper from '../ui/wrapper/Wrapper';
import TitleBlock from '../ui/titleBlock/TitleBlock';
import browsing from '../../assets/img/rhythm/1.svg';
import delivery from '../../assets/img/rhythm/2.svg';
import payments from '../../assets/img/rhythm/3.svg';
import Advantage from '../ui/advantage/Advantage';

const Rhythm: React.FC = () => {

    const advantagesData = [
        {id: 1, title: 'Smooth Browsing', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgUrl: `${browsing}`},
        {id: 2, title: 'EASY Delivery ', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgUrl: `${delivery}`},
        {id: 3, title: 'SwiFT PAYMENTS', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgUrl: `${payments}`},
    ]
    const advantage = advantagesData.map(({id, title, text, imgUrl}) => <Advantage key={id} title={title} text={text} imgUrl={imgUrl}/>)

    return (
        <>
            <section className='bg-black py-[5.87rem] max-m:py-[5rem]'>
                <Wrapper>
                    <TitleBlock iswhite={true}>Why try <span>Rhythm?</span></TitleBlock>
                    <div className='px-[1.92rem] pt-[4.68rem] flex gap-[13rem] max-xl:gap-[10rem] max-l:gap-[6rem] max-l:px-[0] 
                    max-m:gap-[3rem] max-m:flex-wrap'>
                        {advantage}
                    </div>
                </Wrapper>
            </section>
        </>
    );
}

export default Rhythm;

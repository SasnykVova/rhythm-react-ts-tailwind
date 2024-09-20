import React from "react";
import Wrapper from "../../ui/wrapper/Wrapper";
import TitleBlock from "../../ui/titleBlock/TitleBlock";
import photo from "../../../assets/img/customer/avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import Feedback from "../../ui/feedback/Feedback";


const Customers: React.FC = () => {

    const feedBacksData = [
        {id: 1, name: 'Ryan Wels', position: 'PROFESSIONAL GUITARIST', text: '“The Quality and Delivery is always on time, being a professional guitarist myself I love the customer service the brand provides, highly recommend Rhythm anytime.”', imgUrl: `${photo}`},
        {id: 1, name: 'Vlad Hainiuk', position: 'PROFESSIONAL GUITARIST', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: `${photo}`},
        {id: 1, name: 'Ben Parah', position: 'PROFESSIONAL GUITARIST', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', imgUrl: `${photo}`},
    ]

    const feedback = feedBacksData.map(({id, name, position, text, imgUrl}) => 
    <SwiperSlide><Feedback key={id} name={name} position={position} text={text} imgUrl={imgUrl}/></SwiperSlide>)

  return (
    <>
      <Wrapper>
        <section className="pt-[15rem] max-m:pt-[10rem] max-s:pt-[5rem]">
          <TitleBlock>
            What our <span>customer’s</span> say
          </TitleBlock>
          <div className="pt-[6.81rem] max-s:pt-[5rem] cursor-pointer">
            <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                {feedback}
            </Swiper>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Customers;

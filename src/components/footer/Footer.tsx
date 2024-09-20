import React from 'react';
import Wrapper from '../ui/wrapper/Wrapper';
import facebook from '../../assets/img/footer/1.svg';
import twitter from '../../assets/img/footer/2.svg';
import instagram from '../../assets/img/footer/3.svg';
import logo from '../../assets/img/footer/Logo.svg';
import FooterNav from '../ui/footerNav/FooterNav';

const Footer: React.FC = () => {

    const footerMenuData = [
        {id: 1, title: 'Pages', menuItems: ['Store','Collections','Support']},
        {id: 2, title: 'Product', menuItems: ['Terms','Privacy Policy','Copyright']},
    ]
    const footerMenu = footerMenuData.map(({id, title, menuItems}) => <FooterNav key={id} title={title} menuItems={menuItems}/>)

    return (
        <>
        <footer className='bg-[#eee]'>
            <Wrapper>
                <div className='pt-[5rem] pb-[2.68rem] flex flex-wrap gap-[5rem]'>
                    <div>
                        <div className='pb-[1.75rem]'><img src={logo} alt='Logo'/></div>
                        <div className='mb-[1.25rem]'><a className='email-decor pl-11' href='https://accounts.ukr.net/login?client_id=9GLooZH9KjbBlWnuLkVX'>Enquiry@Rhythm.com</a></div>
                        <div><a className='loc-decor pl-11' href='https://accounts.ukr.net/login?client_id=9GLooZH9KjbBlWnuLkVX'>San Francisco</a></div>
                    </div>
                    <div className='flex-[1_1_auto] flex gap-[126px] justify-center items-center'>
                        {footerMenu}
                    </div>
                    <div>
                        <div className='footer-title'>Follow us</div>
                        <div className='flex gap-[2rem]'>
                            <a href='http://localhost:3000/'><img src={facebook} alt='Social network'/></a>
                            <a href='http://localhost:3000/'><img src={twitter} alt='Social network'/></a>
                            <a href='http://localhost:3000/'><img src={instagram} alt='Social network'/></a>
                        </div>
                    </div>
                </div>
                <div className='text-center pb-[2.68rem] pt-[2.32rem]'>© 2022 Copyright.Rhythm</div>
            </Wrapper>
        </footer>            
        </>
    );
}

export default Footer;

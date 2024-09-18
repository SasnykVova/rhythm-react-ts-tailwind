import React from "react";
import Wrapper from "../ui/wrapper/Wrapper";
import logo from "../../assets/img/header/logo.svg";

interface MenuItem {
  id: number;
  link: string;
  text: string;
}

const Header: React.FC = () => {
  const menuData: MenuItem[] = [
    { id: 1, link: "http://localhost:3000/", text: "Store" },
    { id: 2, link: "http://localhost:3000/", text: "Collections" },
    { id: 3, link: "http://localhost:3000/", text: "Support" },
  ];

  const menuItem = menuData.map(({ id, link, text }) => (
    <li className="hover:text-[#FF6428]" key={id}>
      <a href={link}>{text}</a>
    </li>
  ));

  return (
    <>
      <Wrapper>
        <div className="min-h-[150px] flex items-center gap-[131px] absolute -top-0 left-0 w-full z-50 max-m:gap-[50px] max-s:gap-[20px]">
          <div className="w-[123px] h-[30px] max-s:w-8 overflow-hidden max-s:basis-[30px]">
            <img src={logo} alt="logo" className="w-full h-full object-left-top object-cover" />
            </div>
          <nav>
            <ul className="flex text-[rgba(18,18,18,0.4)] font-medium gap-[56px] p-2 max-xl:bg-white/80 max-m: gap-[25px] max-s:flex-wrap">
              {menuItem}
            </ul>
          </nav>
        </div>
      </Wrapper>
    </>
  );
};

export default Header;

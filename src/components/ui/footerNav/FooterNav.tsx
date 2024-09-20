import React from "react";

interface FooterNavProps {
  title: string;
  menuItems: string[];
}

const FooterNav: React.FC<FooterNavProps> = ({ title, menuItems }) => {
  return (
    <>
      <div>
        <div className="footer-title">{title}</div>
        <nav className="flex flex-col gap-[1rem]">
            {menuItems.map((i, index) => <div key={index}>{i}</div>)}
        </nav>
      </div>
    </>
  );
};

export default FooterNav;

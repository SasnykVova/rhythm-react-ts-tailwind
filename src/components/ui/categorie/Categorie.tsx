import React from "react";


interface CategorieProps {
    text: string
    imgUrl: string
}

const Categorie: React.FC<CategorieProps> = ({ text, imgUrl}) => {
  return (
    <>
      <div className="relative">
        <div className="absolute text-center py-[30px] bottom-0 left-0 text-white text-[20px] font-semibold w-full z-10">
          {text}
        </div>
        <div className="relative overflow-hidden rounded-[20px] pb-[127%] categories-gradient-img">
          <img
            className=" absolute w-full h-full top-0 left-0 object-cover"
            src={imgUrl}
            alt="Giutar"
          />
        </div>
      </div>
    </>
  );
};

export default Categorie;

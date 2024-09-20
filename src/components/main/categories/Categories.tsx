import React from "react";
import Wrapper from "../../ui/wrapper/Wrapper";
import TitleBlock from "../../ui/titleBlock/TitleBlock";
import acustic from "../../../assets/img/categories/01.jpg";
import electric from "../../../assets/img/categories/electric.jpg";
import basses from "../../../assets/img/categories/basses.jpg";
import collections from "../../../assets/img/categories/collections.jpg";
import Categorie from "../../ui/categorie/Categorie";

const Categories: React.FC = () => {
  const categoriesData = [
    { id: 1, text: "Acoustic", imgUrl: `${acustic}` },
    { id: 2, text: "Electric", imgUrl: `${electric}` },
    { id: 3, text: "Basses", imgUrl: `${basses}` },
    { id: 4, text: "Collections", imgUrl: `${collections}` },
  ];

  const categories = categoriesData.map(({id, text, imgUrl}) => <Categorie key={id} text={text} imgUrl={imgUrl}/>)

  return (
    <>
      <Wrapper>
        <section className="pt-[11.25rem] max-l:pt-[5rem]">
          <TitleBlock>
            Choose based on <span>Categories</span>
          </TitleBlock>
          <div
            className="grid grid-cols-4 gap-x-[69px] gap-y-[2.5rem] pt-[5rem] px-[3.5rem] 
                max-l:grid-cols-2 max-l:pt-[2.5rem] max-l:px-[1.5rem]  max-s:grid-cols-1 "
          >
            {categories}
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Categories;

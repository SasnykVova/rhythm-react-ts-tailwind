import React from 'react';
import Wrapper from '../../ui/wrapper/Wrapper';
import TitleBlock from '../../ui/titleBlock/TitleBlock';
import FilterBlock from '../../ui/filterBlock/FilterBlock';
import ListItemBlock from '../../ui/listItemBlock/ListItemBlock';
import guitar1 from '../../../assets/img/store/giutar1.png';
import guitar2 from '../../../assets/img/store/giutar2.png';
import guitar3 from '../../../assets/img/store/giutar3.png';
import guitar4 from '../../../assets/img/store/giutar4.png';
import guitar5 from '../../../assets/img/store/giutar5.png';
import guitar6 from '../../../assets/img/store/giutar6.png';

const Store:React.FC = () => {

    const guitarsData = [
        {id: 1, name: 'The Essential Les Paul', price: '$1,299.00', imgUrl: `${guitar1}`},
        {id: 2, name: 'J-45 Standard', price: '$1,699.00', imgUrl: `${guitar2}`},
        {id: 3, name: 'Hummingbird Standard', price: '$2,099.00', imgUrl: `${guitar3}`},
    ]

    const topGuitarsData = [
        {id: 1, name: 'Active Precision Bass® PH V', price: '$4,199.00', imgUrl: `${guitar4}`},
        {id: 2, name: 'Redondo Special', price: '$2,800.00', imgUrl: `${guitar5}`},
        {id: 3, name: 'Professional II Stratocaster®', price: '$3,199.00', imgUrl: `${guitar6}`},
    ]

    const newGuitarItem = guitarsData.map(({id, name, price, imgUrl}) => <ListItemBlock key={id} name={name} price={price} imgUrl={imgUrl}/>)
    const topGuitarItem = topGuitarsData.map(({id, name, price, imgUrl}) => <ListItemBlock key={id} name={name} price={price} imgUrl={imgUrl}/>)

    return (
        <>
        <Wrapper>
            <section className='pt-[7.5rem] '>
                <TitleBlock>Check out the<span>Store</span></TitleBlock>
                <div>
                    <FilterBlock title='NEW ON THE BOARD'/>
                    <div className="flex flex-wrap gap-[54px]">
                        {newGuitarItem}
                    </div>
                    <FilterBlock title='TOP SELLING'/>
                    <div className="flex flex-wrap gap-[54px]">
                        {topGuitarItem}
                    </div>
                </div>
            </section>
        </Wrapper>
        </>
    );
}

export default Store;

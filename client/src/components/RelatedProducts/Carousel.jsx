import './styles/carouselStyle.css';
import React from 'react';
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';

import UserContext from './UserContext.jsx';
import Card from './Card.jsx';




const Carousel = (props) => {

  let { list, label, title, method, update } = props;
  let click = method[label];

  let renderedList = React.useMemo(() => {
    return list.map((prod, i) => (
      <Card
        product={prod}
        label={label}
        key={i}
        click={click}
        update={update}
      />
    ));

  }, [list]);


  if (label === 'outfit') {
    // renderedList = [<Card />, ...renderedList];
  }

  return (
    <>
      <header className='carousel'><h2>{title}</h2></header>
      <main className='carousel' id={label + '-carousel'} title={title}>
        {
          renderedList
        }
      </main>
    </>
  );
};

export default Carousel;

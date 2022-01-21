import './styles/carouselStyle.css';
import React from 'react';
import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';

import UserContext from './UserContext.jsx';
const Card = React.lazy(() => import('./Card.jsx'));




const Carousel = (props) => {

  let { list, label, title, method, update } = props;
  let click = method[label];

  var CARDS = React.useMemo(() => {
    let rendered = list.map((prod, i) => (
      <Card
        product={prod}
        label={label}
        key={i}
        click={click}
        update={update}
      />
    ));

    if (label === 'outfit') {
      rendered = [<Card label='addToOutfit' />, ...rendered];
    }
    return rendered

  }, [list]);


  return (
    <>
      <header className='carousel'><h2>{title}</h2></header>
      <main className='carousel' id={label + '-carousel'} title={title}>
        {
          CARDS
        }
      </main>
    </>
  );
};

export default Carousel;

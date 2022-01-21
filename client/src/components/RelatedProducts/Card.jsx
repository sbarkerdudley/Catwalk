import React, { Suspense } from 'react';

import CardButton from './CardButton.jsx';
import CardImage from './CardImage.jsx';
import CardInfo from './CardInfo.jsx';
import UserContext from './UserContext.jsx';



import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';


const Card = (props) => {

  let { product, label, update } = props;
  let { setUserOutfit, userOutfit } = React.useContext(UserContext);

  const addProductToOutfit = (product) => {
    setUserOutfit(userOutfit => [product, ...userOutfit])
  };

  let { img, description, slogan, id } = product;

  return (
    <div className={`card ${label}`}
      aria-description={description}
      title={slogan}
    >
      <header className='card'>
        <Suspense fallback={<img src='assets/loading.gif' />} >
          <CardButton buttonText={'★'} click={() => addProductToOutfit(product)} id={id} />
          { img && <CardImage img={img} click={update} id={id} /> }
        </Suspense>
      </header>
      <CardInfo product={product} {...update} />
      <span class="fas fa-expand"></span>
    </div>
  );
};

export default Card;


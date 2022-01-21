import React, { Suspense } from 'react';
import CardButton from './CardButton.jsx';
const CardImage = React.lazy(() => import('./CardImage.jsx'));
const CardInfo = React.lazy(() => import('./CardInfo.jsx'));
import UserContext from './UserContext.jsx';



import { relatedProps, outfitProps, addToOutfitProps } from './utils/props.js';


const Card = (props) => {
  let { product, label, update } = props;
  let { setUserOutfit, userOutfit } = React.useContext(UserContext);

  const addProductToOutfit = (product) => {
    setUserOutfit(userOutfit => [product, ...userOutfit])
  };


  if (label === 'addToOutfit') {
    return (
      <div className={`card ${label}`}>
        <CardButton {...{label}} />
      </div>
    )
  }

  let { img, description, slogan, id } = product;

  return (
    <div className={`card ${label}`}
      title={slogan}
      {...{
        'aria-details': description,
        'aria-label': slogan,
      }}
    >
      <header className='card'>
        <Suspense fallback={<img src='assets/loading.gif' />} >
          <CardButton buttonText={'★'} click={() => addProductToOutfit(product)} id={id} />
          {
            img
            &&
            (<Suspense fallback={<img src='assets/loading.gif' />} >
              <CardImage img={product.img} click={update} id={id} />
            </Suspense>)
          }
        </Suspense>
      </header>
      <Suspense fallback={<></>} >
        <CardInfo {...{ product, update }} />
      </Suspense>
      <span className="fas fa-expand"></span>
    </div>
  );
};

export default Card;


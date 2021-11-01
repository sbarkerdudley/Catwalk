// this file is the head component of the "product overview" tree

import React from 'react';
// main subcomponents:
import CategoryAndName from './CategoryAndName/CategoryAndName.jsx';
import ProductInfo from './ProductInfo/ProductInfo.jsx';
import Share from './Share/Share.jsx';
import Images from './Images/Images.jsx';
import StyleSelect from './StyleSelect/StyleSelect.jsx';

// dummydata
import Product from '../../../../fakeData/product.js';
export var FakeProduct = React.createContext('FORGOT TO PROVIDE CONTEXT, CAN MAKE A DEAFULT THO!');

var ProductOverview = () => {

  return (
    <div>
      <FakeProduct.Provider value={Product}>
        <CategoryAndName />
        <ProductInfo />
        <Share />
        <Images />
        <StyleSelect />
      </FakeProduct.Provider>
    </div>
  );
};

export default ProductOverview;
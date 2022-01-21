import React from 'react';
import { FakeProduct } from '../ProductOverview.jsx';

var Description = () => {
  var [product, updateProduct] = React.useContext(FakeProduct);
  return (
    <p className="description">{product.info.description}</p>
  );
};

export default Description;

import React, { Suspense } from 'react';
import ProductOverview from './ProductOverview.jsx';
import { getProductInfoById, getAllStyles, getReviews, getReviewCount } from '../../../../Shared/makeRequest.js';
const RatingsAndReviews = React.lazy(() => import('../../components/Reviews/main.jsx'));
const RelatedProductsAndOutfit = React.lazy(() => import('../RelatedProducts/RelatedProductsAndOutfit.jsx'));

var LoadProduct = () => {
  var [productState, setProductState] = React.useState(null);
  var Product = {};

  var changeProduct = (productId) => {
    getProductInfoById(productId)
      .then((productInfo) => {
        Product.info = productInfo.data;
        return getReviews(productInfo.data.id, 1000, 'newest');
      })
      .then((productReviews) => {
        Product.reviews = productReviews.data;
        return getReviewCount(Product.info.id);
      })
      .then((reviewsMeta) => {
        Product.reviewsMeta = reviewsMeta.data;
        return getAllStyles(Product.info.id);
      })
      .then((productStyles) => {
        Product.styles = productStyles.data;
        setProductState(Product);
      })
      .catch((err) => {
        throw err;
      });
  };

  if (productState === null) {
    changeProduct(63609);
    
    return (
      <></>
    );

  } else {

    return (
      <>
        <ProductOverview productState={productState} />
        <Suspense fallback={<></>}>
          <RelatedProductsAndOutfit productId={productState.info.id} updateGlobalId={changeProduct} />
        </Suspense>
        <Suspense fallback={<></>}>
          <RatingsAndReviews productId={productState.info.id} />
        </Suspense>
      </>
    );
  }
};

export default LoadProduct;


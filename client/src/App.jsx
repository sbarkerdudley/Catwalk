import React, { Suspense } from 'react';
import LoadProduct from './components/ProductOverview/LoadProduct.jsx';

var App = () => {
  return (
    <main id='app'>
      <Suspense fallback={<></>}>
        <LoadProduct />
      </Suspense>
    </main>
  );

};

export default App;

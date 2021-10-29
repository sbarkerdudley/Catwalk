// babel should compile anything imported here and anything imported to those files

import ReactDOM from 'react-dom';
import React from 'react';
// add Dummy.jsx to the gitignore so everyone can use a local copy as the head of their react components
import Dummy from './components/Dummy.jsx';
import ProductOverview from './components/ProductOverview/ProductOverview.jsx';

ReactDOM.render(<Dummy />, document.getElementById('app'));

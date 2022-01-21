import React from 'react';

var SelectSize = (props) => {
  var sizes = Object.keys(props.sizesObject);

  const SIZES = React.useMemo(() => {
    return sizes.map((size, i) => (
      <option key={i} value={size}>{size}</option>
    ))
  }, [sizes])

  if (!sizes.length) {
    return (
      <div>
        <select disabled>
          <option>OUT OF STOCK</option>
        </select>
      </div>
    );
  } else {

    return (
      <div id="select-size-container">

        <select id="select-size" onChange={props.handleSizeSelection} >
          <option>Select size</option>
          {SIZES}
        </select>
      </div>
    );
  }
};


export default SelectSize;


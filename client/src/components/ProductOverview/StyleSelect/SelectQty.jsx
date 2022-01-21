import React from 'react';

const SelectQty = (props) => {

  if (props.sizeSelected === 'Select size') {
    return (
      <div>
        <select disabled>
          <option>&nbsp;&nbsp;&nbsp;</option>
        </select>
      </div>
    );
  } else {

    return (
      <div id="select-quantity-container">
        <select id="select-quantity">
          {props.qtyList.map((qty) => {
            return (<option value={qty}>&nbsp;{qty}&nbsp;</option>);
          })}
        </select>
      </div>
    );
  }

};

export default SelectQty;

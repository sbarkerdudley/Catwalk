import React from 'react';
import Thumbnail from '../StyleSelect/Thumbnail.jsx';

var decorate = {
  addIndexRefs: function(photoArray) {
    for (var i = 0; i < photoArray.length; i++) {
      photoArray[i].index = i;
    }
    return photoArray;
  },

  parseThumbnailRows: (styles) => (
    styles.map((style, i) => (
      <Thumbnail testKey={`style-${i}`} key={i} styleObject={style} />
    ))
  )
};

export default decorate;
import React from 'react';
import GalleryImage from './GalleryImage.jsx';
import { VisibleThumbnails } from './Images.jsx';


var Gallery = () => {
  var [visibleThumbnails, updateVisibleThumbnails] = React.useContext(VisibleThumbnails);
  const THUMBNAILS = React.useMemo(() => visibleThumbnails.map((imageObject, i) => (
      <GalleryImage
        imageObject={imageObject}
        key={i}
      />
  )), [visibleThumbnails])

  return (
    <div id="gallery">
      { THUMBNAILS }
    </div>
  );

};

export default Gallery;

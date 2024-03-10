import React, { useState, useEffect } from 'react';

function ImageComponent({src}) {
  console.log(src)
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
    };

    return () => {
      // Cleanup if needed
    };
  }, [src]);

  return (
    <>
      {imageLoaded ? (
        <img src={src} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ImageComponent;

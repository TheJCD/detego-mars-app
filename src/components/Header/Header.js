import React, { useState, useEffect } from 'react';

const HeaderComponent = () => {
    const src ='https://images.unsplash.com/photo-1638103241568-d8f817ac1c1c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFyc3x8fHx8fDE3MTAxMTAyMzY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800';
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setImageLoaded(true);
        return () => {};
    }, [src]);

  return (
    <div className="header">
      {imageLoaded ? (<img src={src} alt="Async Image" />) : (<div>Loading...</div>)}
      <h1 className="applicationHeading">Mission Mars: Task Tracking Beyond Earth's Bounds</h1>
      <p className="applicationParagraph">Beta version</p>
    </div>
  );
}

export default HeaderComponent;

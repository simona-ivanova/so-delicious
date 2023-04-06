import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const RecipeDetailCarousel = (images) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.images[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images.images[1]}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}


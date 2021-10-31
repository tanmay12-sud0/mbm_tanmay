import React from "react";
import { Carousel } from "react-bootstrap";

function CustomCarousel({ images }) {
  return (
    <div>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item>
            <div
              className="carousel-image"
              style={{ backgroundImage: `url(${image})` }}
            >
              {" "}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;

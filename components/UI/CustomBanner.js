import React from "react";
import { Carousel } from "react-bootstrap";

function CustomBanner({ image, caption }) {
  return (
    <div className="banner-image d-flex justify-content-center align-items-center">
      <h1>{caption}</h1>
    </div>
  );
}

export default CustomBanner;

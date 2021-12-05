import React from "react";

const HeaderCarousel = () => {
  return (
    <div className="header-carousel mb-5">
      <div className="header-carousel-content">
        <h2>
          74th Foundation Day Celebration{" "}
          <span style={{ color: "red" }}>@MBM</span>
        </h2>
        <hr />
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available. It is also
          used to temporarily replace
        </p>
      </div>
      <img
        className="header-carousel-image"
        src="https://res.cloudinary.com/howardkacloudinary/image/upload/v1638701864/Screenshot_2021-12-05_162331_lblsd6.png"
        alt="image"
      />
      <div className="header-carousel-footer"></div>
    </div>
  );
};

export default HeaderCarousel;

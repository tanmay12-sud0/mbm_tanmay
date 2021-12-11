import React from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";

const HeaderCarousel = () => {
  // For responsive table
  // edit width here

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1078px)",
  });

  return (
    <div className="header-carousel ">
      <div className="header-carousel-content">
        <h2>
          74th Foundation Day Celebration{" "}
          <span style={{ color: "red", fontFamily: "Ubuntu" }}>@MBM</span>
        </h2>
        <hr />
        {!isTabletOrMobileDevice && (
          <p>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available. It is also
            used to temporarily replace
          </p>
        )}
      </div>
      <img
        className="header-carousel-image"
        src="https://res.cloudinary.com/howardkacloudinary/image/upload/v1638701864/Screenshot_2021-12-05_162331_lblsd6.png"
        alt="image"
      />
      <div className="header-carousel-base">
        <div className="header-carousel-button">
          <Button variant="outlined" className="headerBtn">
            Know More &gt;
          </Button>
        </div>
        {!isTabletOrMobileDevice && (
          <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate .
          </p>
        )}
      </div>
    </div>
  );
};

export default HeaderCarousel;

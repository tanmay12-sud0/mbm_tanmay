import React from "react";
import Button from "@mui/material/Button";
import { useMediaQuery } from "react-responsive";

const HeaderCarousel = (props) => {
  // For responsive table
  // edit width here

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1078px)",
  });

  return (
    <div className="mt-5">
      <div className="container header-carousel " style={{ zIndex: "100" }}>
        <div className="row">
          <div className="col-lg-5 col-12 header-carousel-content">
            <h2>
              {props.title}{" "}
              <span style={{ color: "red", fontFamily: "Ubuntu" }}>@MBM</span>
            </h2>
            <hr />
            {/* {!isTabletOrMobileDevice && ( */}
            <p style={{ textAlign: "justify" }}>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available. It is
              also used to temporarily replace
            </p>
          </div>
          <div className="col-lg-1 col-12"></div>
          <div className="col-lg-6 col-12">
            <img
              className="card-img header-carousel-image"
              src="https://res.cloudinary.com/howardkacloudinary/image/upload/v1638701864/Screenshot_2021-12-05_162331_lblsd6.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="header-carousel-base">
        <div className="container header-carousel-button">
          <Button variant="outlined" className="headerBtn">
            Know More &gt;
          </Button>
        </div>

        <p>Lorem ipsum is a placeholder text commonly used to demonstrate .</p>
      </div>
      {/* <div className="header-carousel-base">
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
      </div> */}
    </div>
    // <div className="header-carousel container">
    //   <div className="header-carousel-content">
    //     <h2>
    //       {props.title}{" "}
    //       <span style={{ color: "red", fontFamily: "Ubuntu" }}>@MBM</span>
    //     </h2>
    //     <hr />
    //     {!isTabletOrMobileDevice && (
    //       <p>
    //         In publishing and graphic design, Lorem ipsum is a placeholder text
    //         commonly used to demonstrate the visual form of a document or a
    //         typeface without relying on meaningful content. Lorem ipsum may be
    //         used as a placeholder before the final copy is available. It is also
    //         used to temporarily replace
    //       </p>
    //     )}
    //   </div>
    //   <img
    //     className="header-carousel-image"
    //     src="https://res.cloudinary.com/howardkacloudinary/image/upload/v1638701864/Screenshot_2021-12-05_162331_lblsd6.png"
    //     alt="image"
    //   />
    //   <div className="header-carousel-base">
    //     <div className="header-carousel-button">
    //       <Button variant="outlined" className="headerBtn">
    //         Know More &gt;
    //       </Button>
    //     </div>
    //     {!isTabletOrMobileDevice && (
    //       <p>
    //         Lorem ipsum is a placeholder text commonly used to demonstrate .
    //       </p>
    //     )}
    //   </div>
    // </div>
  );
};

export default HeaderCarousel;

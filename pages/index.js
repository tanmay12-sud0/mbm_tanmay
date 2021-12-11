import React from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import HomePageCards from "../components/UI/HomePageCards";
import VcDesk from "../components/ui/VcDesk";
import MbmIntro from "../components/ui/MbmIntro";
import HomePagePro from "../components/UI/HomePagePro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
import ImageGrid from "../components/UI/ImageGrid";
// import Abc from "../components/UI/abc";
import { Carousel } from "react-bootstrap";
function home() {
  return (
    <div>
      <Carousel
        pause="false"
        controls={false}
        indicators={false}
        className="mb-5"
      >
        <Carousel.Item interval="2000">
          <HeaderCarousel title="74th Foundation Day Celebration " />
        </Carousel.Item>
        <Carousel.Item interval="2000">
          <HeaderCarousel title="73th Foundation Day Celebration " />
        </Carousel.Item>
        <Carousel.Item interval="2000">
          <HeaderCarousel title="72th Foundation Day Celebration " />
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <MbmIntro></MbmIntro>
        <VcDesk />
      </div>
      <YouAreLookingFor></YouAreLookingFor>
      <HomePageCards />
      <HomePagePro />
      <ImageGrid></ImageGrid>
      {/* <Abc /> */}
    </div>
  );
}

export default home;

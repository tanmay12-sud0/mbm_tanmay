import React from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import HomePageCards from "../components/UI/HomePageCards";
import VcDesk from "../components/ui/VcDesk";
import MbmIntro from "../components/ui/MbmIntro";
import HomePagePro from "../components/UI/HomePagePro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
// import Abc from "../components/UI/abc";
function home() {
  return (
    <div>
      <HeaderCarousel />
      <div className="container">
        <MbmIntro></MbmIntro>
        <VcDesk />
      </div>
      <YouAreLookingFor></YouAreLookingFor>
      <HomePageCards />
      <HomePagePro />
      {/* <Abc /> */}
    </div>
  );
}

export default home;

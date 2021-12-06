import React from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import abc1 from "../images/abc1.png";
import abc2 from "../images/abc.png";
import abc3 from "../images/abc3.png";
import HomePageCards from "../components/UI/HomePageCards";
import Vcdesk from "../components/UI/Vcdesk";
import Mbmintro from "../components/UI/Mbmintro";
import HomePagePro from "../components/UI/HomePagePro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
function home() {
  return (
    <div>
      <HeaderCarousel />
      <div className="container">
        <Mbmintro></Mbmintro>
        <Vcdesk />
      </div>
      <YouAreLookingFor></YouAreLookingFor>
      <HomePageCards />
      <HomePagePro />
    </div>
  );
}

export default home;

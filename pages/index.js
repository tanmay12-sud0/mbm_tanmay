import React from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import Vcdesk from "../components/UI/Vcdesk";
import Mbmintro from "../components/UI/Mbmintro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
function home() {
  return (
    <div>
      <HeaderCarousel />
      <div className="container">
        <Mbmintro></Mbmintro>
        <Vcdesk></Vcdesk>
      </div>
      <YouAreLookingFor></YouAreLookingFor>
    </div>
  );
}

export default home;

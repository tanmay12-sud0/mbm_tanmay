import React from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
<<<<<<< HEAD
import abc1 from "../images/abc1.png";
import abc2 from "../images/abc.png";
import abc3 from "../images/abc3.png";
import HomePageCards from "../components/UI/HomePageCards";
=======
import Vcdesk from "../components/UI/Vcdesk";
import Mbmintro from "../components/UI/Mbmintro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
>>>>>>> 24458798aecd30db23b1aaa9d809f1bb141fb492
function home() {
  return (
    <div>
      <HeaderCarousel />
      <div className="container">
        <Mbmintro></Mbmintro>
        <Vcdesk></Vcdesk>
      </div>
<<<<<<< HEAD
      <HomePageCards />
=======
      <YouAreLookingFor></YouAreLookingFor>
>>>>>>> 24458798aecd30db23b1aaa9d809f1bb141fb492
    </div>
  );
}

export default home;

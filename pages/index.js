import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
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

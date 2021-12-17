import React, { useState } from "react";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import HomePageCards from "../components/UI/HomePageCards";
import VcDesk from "../components/ui/VcDesk";
import MbmIntro from "../components/ui/MbmIntro";
import HomePagePro from "../components/UI/HomePagePro";
import YouAreLookingFor from "../components/UI/YouAreLookingFor";
import ImageGrid from "../components/UI/ImageGrid";
// import Abc from "../components/UI/abc";
import { Carousel } from "react-bootstrap";
import MBM_API from "../apis";
import { useEffect } from "react";
// import { Directus } from '@directus/sdk';

function home() {


//   const directus = new Directus('http://65.0.236.193:8055');

// useEffect(async () => {
//     const data = await directus.items('website_props').readMany({ meta: 'total_count' });

//     console.log(data.data);
//   }, []);


  const[mbmNitro, setmbmNitro] = useState("");
  const[mbmNitr, setmbmNitr] = useState({});


  const getData = async() => {
    try {
       let res = await MBM_API.getHeader({
        search: "mbm_university_text"
       });
       console.log(res.data.data[0]);
       setmbmNitro(res.data.data[0].prop_name);
       setmbmNitr(res.data.data[0]);
      //  console.log(res.data.data[0].prop_name);
    } catch (error) {
      
    }
  }

  useEffect(async () => {
      getData();
  }, []);


// console.log("hello");
// console.log(mbmNitro);
// console.log(mbmNitr);


  return (
    <div>
      <h1>{mbmNitro}</h1>
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
        <MbmIntro mbmNitro={mbmNitro} mbmNitr={mbmNitr}></MbmIntro>
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

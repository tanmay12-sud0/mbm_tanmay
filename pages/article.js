import React from "react";
import ArticleSingle from "../components/UI/ArticleSingle";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";
import Button from "@mui/material/Button";
function article() {
  return (
    <div>
      <div
        className=" d-flex "
        style={{
          color: "white",
          background: "#29425f",
          paddingLeft: "30px",
          paddingRight: "30px",
          alignItems: "center",
        }}
      >
        <div
          className=" d-flex "
          style={{ flex: 1, width: "100%", alignItems: "center" }}
        >
          <BreadcrumbComponent />
          <div>Who We Are</div>
        </div>

        <div className=" d-flex " style={{ justifyContent: "flex-end" }}>
          ..a story of legacy, excellence and diversity
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="container"
      >
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          MBM UNIVERSITY ACT, 2021 passed by Rajasthan Legislative Assembly on
          Sep 17, 2021
        </h1>
        <Button variant="outlined" style={{ color: "rgba(55,63,80,1)" }}>
          DOWNLOAD ATTACHMENT{" "}
        </Button>
        <hr />
        <small>Posted by Admin under Announcements on 1 may, 2021</small>
      </div>
       <div
        style={{
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
         
        }}
        className="container"
      >
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere libero quae quidem. Explicabo numquam nemo itaque voluptates? Hic dolores sed porro eveniet quisquam id itaque perferendis minima consectetur rs, corrupti sunt iste quas ad alias voluptates consequatur  vero consequuntur quibusdam reprehenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro aliquam, dolor fugit delectus ratione assumenda aut!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic,git delectus ratione assumenda aut!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere libero quae quidem. Explicabo numquam nemo itaque voluptatenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro aliquam, dolor fugit delectus ratione assumenda aut!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere libero quae quidem. Explicabo numquam nemo itaque voluptatesr rerum eos, corrupti sunt iste quas ad alias voluptates consequatur  vero consequuntur quibusdam reprehenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro aliquam, dolor fugit delectus ratione assumenda aut!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptaectetur rerum eos, corrupti sunt iste quas ad alias voluptates consequatur  vero consequuntur quibusdam reprehenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro aliquam, dolor fugit delectus ratione assumenda aut!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere libero quae quidem. Explicabo numquam nemo itaque voluptates?obcaecati rem porro aliquam, dolor fugit delectus ratione assumenda aut!</p>
      </div>
      <hr />
    </div>
  );
}

export default article;

import React from "react";
import ArticleSingle from "../components/ui/ArticleSingle";
import BreadcrumbComponent from "../components/ui/CustomBreadcrumb";
import Button from "@mui/material/Button";
import ArticleCard from "../components/ui/ArticleCard";

function article() {
  const data =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere ";
  return (
    <div>
      <BreadcrumbComponent />

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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic, quis? Voluptates facere libero quae quidem.
          Explicabo numquam nemo itaque voluptates? Hic dolores sed porro
          eveniet quisquam id itaque perferendis minima consectetur rs, corrupti
          sunt iste quas ad alias voluptates consequatur vero consequuntur
          quibusdam reprehenderit rerum. Laborum omnis a nobis et ut obcaecati
          rem porro aliquam, dolor fugit delectus ratione assumenda aut!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic,git delectus ratione assumenda aut!
        </p>
        <h3>What's changed?</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic, quis? Voluptates facere libero quae quidem.
          Explicabo numquam nemo itaque voluptatenderit rerum. Laborum omnis a
          nobis et ut obcaecati rem porro aliquam, dolor fugit delectus ratione
          assumenda aut!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic, quis? Voluptates facere libero quae quidem.
          Explicabo numquam nemo itaque voluptatesr rerum eos, corrupti sunt
          iste quas ad alias voluptates consequatur vero consequuntur quibusdam
          reprehenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro
          aliquam, dolor fugit delectus ratione assumenda aut!
        </p>
        <h3>Thank You</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic, quis? Voluptaectetur rerum eos, corrupti sunt iste
          quas ad alias voluptates consequatur vero consequuntur quibusdam
          reprehenderit rerum. Laborum omnis a nobis et ut obcaecati rem porro
          aliquam, dolor fugit delectus ratione assumenda aut!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
          corrupti cum. Hic, quis? Voluptates facere libero quae quidem.
          Explicabo numquam nemo itaque voluptates?obcaecati rem porro aliquam,
          dolor fugit delectus ratione assumenda aut!
        </p>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: "7vw",
          paddingRight: "7vw",
        }}
      >
        <h2>More From #Announcements</h2>
        <a href="/announcements" style={{ color: "rgba(55,63,80,1)" }}>
          See all
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexFlow: "wrap",
          justifyContent: "center",
        }}
      >
        <ArticleCard desc={data} />
        <ArticleCard desc={data} />
        <ArticleCard desc={data} />
      </div>
    </div>
  );
}

export default article;

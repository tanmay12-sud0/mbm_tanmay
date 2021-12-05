import React from "react";
import Button from "@mui/material/Button";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";
import ArticleCard from "../components/UI/ArticleCard";

function announcements() {
  const lst = [];
  const data = `I don't need to compromise my principles, because they don't have the slightest bearing on what happens to me anyway. Some quick example text to build on the card title and make up the bulk of thecard's content.`;
  for (let i = 0; i < 12; i++) lst.push({ data: data, i: i });
  return (
    <div>
      <BreadcrumbComponent></BreadcrumbComponent>
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
          # Announcements
        </h1>
        <small>
          Find all latest public announcements from University Offices.
        </small>
        <hr />
      </div>
      <div
        style={{
          marginTop: "50px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexFlow: "wrap",
        }}
        className="container"
      >
        {lst.map(({ data, i }) => (
          <ArticleCard desc={data} key={i} />
        ))}
        <Button
          variant="outlined"
          style={{ color: "rgba(55,63,80,1)", marginTop: "30px" }}
        >
          LOAD MORE...
        </Button>
      </div>
    </div>
  );
}

export default announcements;

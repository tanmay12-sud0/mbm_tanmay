import React from "react";
import Button from "@mui/material/Button";
import BreadcrumbComponent from "../components/ui/CustomBreadcrumb";
import ArticleCard from "../components/ui/ArticleCard";

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
        <h1 className="announcement-Heading"># Announcements</h1>
        <small className="announcement-subtitle">
          Find all latest public announcements from University Offices.
        </small>
        <hr />
        <div
          style={{
            marginTop: "52px",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "justify",
            display: "flex",
            flexFlow: "wrap",
            // marginBottom: "-20px",
          }}
        >
          {lst.map(({ data, i }) => (
            <ArticleCard desc={data} key={i} />
          ))}
        </div>
        <div>
          <Button variant="outlined" className="announcement-button">
            LOAD MORE...
          </Button>
        </div>
      </div>
    </div>
  );
}

export default announcements;

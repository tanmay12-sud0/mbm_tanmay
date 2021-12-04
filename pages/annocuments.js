import React from "react";
import Button from "@mui/material/Button";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";
function annocuments() {
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
          # Annocuments
        </h1>
        <small>Posted by Admin under Announcements on 1 may, 2021</small>

        <hr />
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
        <Button variant="outlined" style={{ color: "rgba(55,63,80,1)" }}>
          LOAD MORE...
        </Button>
      </div>
    </div>
  );
}

export default annocuments;

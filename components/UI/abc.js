import React from "react";
import ArticleCard from "./ArticleCard";
function Abc() {
  return (
    <div>
      <div className="container">
        <div
          className="row my-5"
          style={{ overflow: "hidden", alignItems: "center" }}
        >
          <div
            className="col-10 col-md-4 mx-auto my-2"
            style={{ alignItems: "center" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flip-card m-auto">
              <ArticleCard></ArticleCard>
            </div>
          </div>
          <div
            className="col-10 col-md-4 mx-auto my-2"
            style={{ alignItems: "center" }}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="flip-card m-auto">
              <ArticleCard></ArticleCard>
            </div>
          </div>
          <div
            className="col-10 col-md-4 mx-auto my-2"
            style={{ alignItems: "center" }}
          >
            <div className="flip-card m-auto">
              <ArticleCard></ArticleCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abc;

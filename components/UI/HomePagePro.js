import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

function HomePagePro() {
  return (
    <div style={{ backgroundColor: "rgb(244 250 253)", marginTop: "50px" }}>
      <hr />
      <div className="container  pt-2 pb-2">
        <div className="row">
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <div>
              <h1
                style={{
                  fontSize: "60px",
                  color: " hsl(212, 40%, 27%)",
                  fontFamily: "Ubuntu",
                  fontWeight: "500",
                  lineHeight: "1.1",
                  marginTop: "10px",
                }}
              >
                RESEARCH
              </h1>
              <h1
                style={{
                  fontSize: "56px",
                  color: "#cc0c1e",
                  fontFamily: "Ubuntu",
                  marginLeft: "20px",
                  fontWeight: "500",
                }}
              >
                @MBM
              </h1>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
                ratione amet animi neque quasi delectus obcaecati perspiciatis
                molestias velit facere. Atque quibusdam, neque maiores ea aut
                quia quos doloremque optio officia porro. Eius voluptatem,
                veritatis voluptates, quia necessitatibus, voluptatum
                praesentium pariatur molestiae aliquam a sed nostrum cumque
               
                blanditiis sit nulla obcaecati harum est voluptas. Corporis
                impedit nisi vero itaque, iusto recusandae dolore accusamus,
                sequi incidunt laboriosam quam dolores veniam placeat id
                consequatur et, sit quaerat provident.
              </p>
              <li style={{ listStyleType: "none", color: "#cc0c1e" }}>
                &gt; Know More
              </li>
            </div>
            <div></div>
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <ArticleCard
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
              key={1}
            />
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-center">
            <ArticleCard
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
              key={2}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HomePagePro;

// style={{ backgroundColor: "#e6f7ff" }}

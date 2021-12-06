import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

function HomePagePro() {
  return (
    <>
      <br />

      <div style={{ backgroundColor: "#e6f7ff" }}>
        <hr />
        <Container>
          <Row>
            <Col>
              <div
                style={{
                  marginTop: "50px",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "justify",
                  display: "flex",
                  flexFlow: "wrap",
                }}
                className="container"
              >
                <div>
                  <h1
                    style={{
                      fontSize: "60px",
                      color: " hsl(212, 40%, 27%)",
                      fontFamily: "Ubuntu",
                      fontWeight: "500",
                    }}
                  >
                    RESEARCH
                  </h1>
                  <h1
                    style={{
                      fontSize: "50px",
                      color: "red",
                      fontFamily: "inherit",
                      marginLeft: "20px",
                      fontWeight: "500",
                    }}
                  >
                    @MBM
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium illum ducimus iusto, quod obcaecati blanditiis.
                    Laudantium illum ducimus iusto, quod obcaecati blanditiis.
                    Veritatis nulla corrupti quisquam dolor assumenda maiores
                    omnis, voluptatum officia
                  </p>
                  <li style={{ listStyleType: "none", color: "red" }}>
                    &gt; Know More
                  </li>
                </div>

                <div></div>
              </div>
            </Col>
            <Col>
              <ArticleCard
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
                key={1}
              />
            </Col>
            <Col>
              <ArticleCard
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
                key={2}
              />
            </Col>
          </Row>
        </Container>
        <br />
        <hr />
      </div>
    </>
  );
}

export default HomePagePro;

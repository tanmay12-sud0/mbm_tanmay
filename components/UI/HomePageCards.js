import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import ArticleCard from "./ArticleCard";

function HomePageCards() {
  return (
    <>
      <br />
      <br />
      <br />
      <div>
        <Container>
          <h1>
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#cc0c1e",
                fontFamily: "Ubuntu",
              }}
            >
              LATEST
            </span>{" "}
            <span
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                fontFamily: "Ubuntu",
              }}
            >
              NEWS
            </span>
          </h1>
        </Container>
        <Container>
          <Row>
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
            <Col>
              <div>
                <Card
                  style={{
                    width: "24rem",
                    border: "3.5px dashed red",
                    // marginTop: "15px",
                    height: "31rem",
                    marginLeft: "0.1rem",
                  }}
                >
                  <Card style={{ width: "23.6rem", height: "30.6rem" }}>
                    <Card.Title
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "red",

                        fontSize: "33px",
                        marginTop: "10px",
                      }}
                    >
                      <h1>
                        <span
                          style={{
                            fontSize: "2rem",
                            fontWeight: "bold",
                            color: "#cc0c1e",
                            fontFamily: "Ubuntu",
                          }}
                        >
                          CAMPUS
                        </span>{" "}
                        <span
                          style={{
                            fontSize: "2rem",
                            fontWeight: "bold",

                            fontFamily: "Ubuntu",
                          }}
                        >
                          SPOTLIGHT
                        </span>
                      </h1>
                    </Card.Title>
                    <hr />
                    <Card.Img
                      variant="top"
                      src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png"
                    />
                    <Card.Body>
                      <Card.Title
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          color: "red",

                          fontSize: "23px",
                          marginTop: "4px",
                        }}
                      >
                        Mr. Andrew Mied
                      </Card.Title>
                      <Card.Title
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          color: "black",

                          fontSize: "14px",

                          marginTop: "5px",
                        }}
                      >
                        BE Second Year, CSE
                      </Card.Title>
                      <hr style={{ color: "red" }} />
                      <Card.Text
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",

                          textAlign: "justify",
                          fontSize: "14px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium illum ducimus iusto, quod obcaecati
                        blanditiis. Laudantium illum ducimus iusto,
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <hr />
      </div>
    </>
  );
}

export default HomePageCards;

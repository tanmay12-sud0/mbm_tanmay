import React from "react";

import ArticleCard from "./ArticleCard";
import AppsIcon from "@mui/icons-material/Apps";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function HomePageCards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-xl-8 col-12 d-flex justify-content-center ">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-6">
                  <h1
                    style={{
                      fontSize: "26px",
                      color: " hsl(212, 40%, 27%)",
                      fontFamily: "Ubuntu",
                      fontWeight: "500",
                      lineHeight: "1.1",
                    }}
                  >
                    <AppsIcon></AppsIcon> LATEST
                    <span
                      style={{
                        fontSize: "26px",
                        color: "#cc0c1e",
                        fontFamily: "Ubuntu",
                        fontWeight: "500",
                        marginLeft: "8px",
                      }}
                    >
                      NEWS
                    </span>
                  </h1>
                </div>
                <div className="col-6" style={{ textAlign: "end" }}>
                  <a
                    href="#"
                    style={{
                      color: "#29425f",
                      margin: "auto",
                      fontSize: "20px",
                    }}
                  >
                    More &gt;
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12 d-flex justify-content-center m-auto">
                <ArticleCard
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
                  key={1}
                />
              </div>
              <div className="col-lg-6 col-12 d-flex justify-content-center m-auto">
                <ArticleCard
                  desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
                  key={2}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex justify-content-center m-auto">
          <Card
            sx={{ maxWidth: 495 }}
            style={{
              boxShadow: "0px 0px 0px 0px",
              border: "3px dashed red",
              padding: "10px",
            }}
          >
            <CardContent
              style={{
                // backgroundImage:
                // "linear-gradient( #d7d7e9, #e9e9e9,#e9cfcf)",
                backgroundColor: "inherit",
              }}
            >
              <Typography
                style={{
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#cc0c1e",
                    fontFamily: "Ubuntu",
                  }}
                >
                  CAMPUS
                </span>{" "}
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#29425f",
                    fontFamily: "Ubuntu",
                  }}
                >
                  SPOTLIGHT
                </span>
              </Typography>
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div style={{ marginTop: "20px" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png"
                        sx={{ width: 156, height: 156 }}
                        style={{ margin: "auto", border: "3px solid #29425f" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <p>Mr. Anurag Gupta</p>
                        <p style={{ marginTop: "-15px" }}>
                          Full Stack Developer
                        </p>
                      </div>
                      <hr style={{ color: "red", height: "2px" }} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          maxHeight: "117px",
                          height: "117px",
                          textAlign: "justify",
                          textAlignLast: "center",
                          overflow: "hidden",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint excepturi beatae, doloremque libero illum, corrupti
                        non quidem fugiat adipisci voluptatum mollitia obcaecati
                        sequi reprehenderit molestiae ea voluptate iusto
                        consequatur repudiandae magni autem ullam, nostrum
                      </Typography>{" "}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ marginTop: "20px" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png"
                        sx={{ width: 156, height: 156 }}
                        style={{ margin: "auto", border: "3px solid #29425f" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <p>Mr. Anurag Gupta</p>
                        <p style={{ marginTop: "-15px" }}>
                          Full Stack Developer
                        </p>
                      </div>
                      <hr style={{ color: "red", height: "2px" }} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          maxHeight: "117px",
                          height: "117px",
                          textAlign: "justify",
                          textAlignLast: "center",
                          overflow: "hidden",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint excepturi beatae, doloremque libero illum, corrupti
                        non quidem fugiat adipisci voluptatum mollitia obcaecati
                        sequi reprehenderit molestiae ea voluptate iusto
                        consequatur repudiandae magni autem ullam, nostrum
                      </Typography>{" "}
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div style={{ marginTop: "20px" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png"
                        sx={{ width: 156, height: 156 }}
                        style={{ margin: "auto", border: "3px solid #29425f" }}
                      />
                      <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <p>Mr. Anurag Gupta</p>
                        <p style={{ marginTop: "-15px" }}>
                          Full Stack Developer
                        </p>
                      </div>
                      <hr style={{ color: "red", height: "2px" }} />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        style={{
                          maxHeight: "117px",
                          height: "117px",
                          textAlign: "justify",
                          textAlignLast: "center",
                          overflow: "hidden",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint excepturi beatae, doloremque libero illum, corrupti
                        non quidem fugiat adipisci voluptatum mollitia obcaecati
                        sequi reprehenderit molestiae ea voluptate iusto
                        consequatur repudiandae magni autem ullam, nostrum
                      </Typography>{" "}
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="sr-only"
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "93px",
                    }}
                  >
                    &lt;
                  </span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span
                    className="sr-only"
                    style={{
                      color: "red",
                      position: "absolute",
                      top: "93px",
                    }}
                  >
                    &gt;
                  </span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePageCards;

// <div>
//   <Container>
//     <h1>
//       <span
//         style={{
//           fontSize: "2rem",
//           fontWeight: "bold",
//           color: "#cc0c1e",
//           fontFamily: "Ubuntu",
//         }}
//       >
//         LATEST
//       </span>{" "}
//       <span
//         style={{
//           fontSize: "2rem",
//           fontWeight: "bold",
//           fontFamily: "Ubuntu",
//         }}
//       >
//         NEWS
//       </span>
//     </h1>
//   </Container>
//   <Container>
//     <Row>
//       <Col>
//         <ArticleCard
//           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
//           key={1}
//         />
//       </Col>
//       <Col>
//         <ArticleCard
//           desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Laudantium illum ducimus iusto, quod obcaecati blanditiis. Veritatis nulla corrupti quisquam dolor assumenda maiores omnis, voluptatum officia"
//           key={2}
//         />
//       </Col>
//       <Col>
//         <div>
//           <Card
//             style={{
//               width: "24rem",
//               border: "3.5px dashed red",
//               // marginTop: "15px",
//               height: "31rem",
//               marginLeft: "0.1rem",
//             }}
//           >
//             <Card style={{ width: "23.6rem", height: "30.6rem" }}>
//               <Card.Title
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   color: "red",

//                   fontSize: "33px",
//                   marginTop: "10px",
//                 }}
//               >
//                 <h1>
//
//
//                 </h1>
//               </Card.Title>
//               <hr />
//               <Card.Img
//                 variant="top"
//                 src="http://mbm.ac.in/wp-content/uploads/2021/08/mbm_front.png"
//               />
//               <Card.Body>
//                 <Card.Title
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     color: "red",

//                     fontSize: "23px",
//                     marginTop: "4px",
//                   }}
//                 >
//                   Mr. Andrew Mied
//                 </Card.Title>
//                 <Card.Title
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     color: "black",

//                     fontSize: "14px",

//                     marginTop: "5px",
//                   }}
//                 >
//                   BE Second Year, CSE
//                 </Card.Title>
//                 <hr style={{ color: "red" }} />
//                 <Card.Text
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",

//                     textAlign: "justify",
//                     fontSize: "14px",
//                   }}
//                 >
//                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Laudantium illum ducimus iusto, quod obcaecati
//                   blanditiis. Laudantium illum ducimus iusto,
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Card>
//         </div>
//       </Col>
//     </Row>
//   </Container>
//   <br />
//   <hr />
// </div>;

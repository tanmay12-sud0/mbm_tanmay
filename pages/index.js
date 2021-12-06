import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import HeaderCarousel from "../components/ui/HeaderCarousel";
import abc1 from "../images/abc1.png";
import abc2 from "../images/abc.png";
import abc3 from "../images/abc3.png";
function home() {
  return (
    <div>
      <HeaderCarousel />
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12">
            <div>
              <img
                style={{ border: "3px solid rgba(55,63,80,1)" }}
                src="https://th.bing.com/th/id/OIP.wUk9lMqzmr9pthy8K3NHGwHaE2?pid=ImgDet&rs=1"
                alt=""
                className="card-img img-responsive"
              />
            </div>
          </div>
          <div className="col-lg-1 col-12"></div>
          <div className="col-lg-6 col-12 mt-md-0 mt-4 ">
            <h1>
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                MBM
              </span>{" "}
              <span
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                }}
              >
                UNIVERSITY
              </span>
            </h1>
            <p style={{ color: "black", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sit sed, architecto consequuntur eveniet laudantium eum rerum,
              aliquid soluta doloremque ipsa beatae provident quis distinctio
              hic cumque illum dolores asperiores officiis fugit culpa fuga!
              praesentium quo iusto sapiente, repudiandae nisi. Veritatis
              accusamus placeat atque cum. Ipsum commodi, earum ipsa iste
              dolores ad, maxime nulla soluta neque dolore hic quos molestiae
              vero eligendi similique ducimus. Delectus necessitatibus eius sint
              at, nobis beatae accusamus ab autem natus consectetur unde nihil
              expedita deserunt sunt sit velit quasi quidem, a quibusdam non
              alias officiis voluptatibus provident! Porro, exercitationem
              maiores.
            </p>
            <div className="col-12">
              <div className="row d-flex">
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; History of MBM
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Campus & Infra
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Photo Gallary
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Vision & Mission
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Program Offered
                  </li>
                </div>
                <div className="col-4">
                  <li style={{ listStyleType: "none", color: "#29425f" }}>
                    &gt; Frequent Question
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col-lg-8 col-12">
            <h1 style={{ marginBottom: "30px" }}>
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                From{" "}
              </span>
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Vice Chancellor's
              </span>{" "}
              <span
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                }}
              >
                Desk
              </span>
            </h1>

            <div className="col-lg-12 col-12">
              <div className="row d-flex">
                <div className="col-lg-5 col-12">
                  <Avatar
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                      border: "4px solid #ef2727",
                    }}
                    alt="vc avatar"
                    src="https://th.bing.com/th/id/OIP.wUk9lMqzmr9pthy8K3NHGwHaE2?pid=ImgDet&rs=1"
                    sx={{ width: 230, height: 230 }}
                  />
                  <div
                    style={{
                      textAlign: "center",
                      justifyContent: "center",
                      alignItems: "center",
                      margin: "auto",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        color: "red",
                        marginBottom: "2px",
                        fontWeight: "bold",
                        marginTop: "6px",
                      }}
                    >
                      Prof. Ajay Kumar Sharma
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "1px",
                        marginTop: "0px",
                      }}
                    >
                      Hon'ble Vice Chancellor
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "1px",
                        marginTop: "0px",
                      }}
                    >
                      MBM UNIVERSITY
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "15px",
                        marginTop: "0px",
                      }}
                    >
                      Jodhpur, Rajasthan
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur ipsum eius vitae sint
                    id autem molestias asperiores, iste at voluptate sapiente
                    odio provident?
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptates exercitationem quos officia quo, harum debitis
                    Voluptates exercitationem quos officia quo, harum debitis
                    Dignissimos a, nostrum perferendis non vero tempore!
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium illum ducimus iusto, quod obcaecati blanditiis.
                    Laudantium illum ducimus iusto, quod obcaecati blanditiis.
                    Veritatis nulla corrupti quisquam dolor assumenda maiores
                    omnis, voluptatum officia!
                  </p>
                </div>
                <div className="col-lg-1 col-12"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div>
              <div>
                <h1 style={{ marginBottom: "30px" }}>
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: "red",
                    }}
                  >
                    Recent
                  </span>{" "}
                  <span
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                    }}
                  >
                    Highlights
                  </span>
                </h1>
                <Card sx={{ width: "100%" }}>
                  <CardMedia
                    style={{
                      border: "5px solid #ef2727",
                    }}
                    component="img"
                    height="250"
                    image="https://th.bing.com/th/id/OIP.wUk9lMqzmr9pthy8K3NHGwHaE2?pid=ImgDet&rs=1"
                    alt="green iguana"
                  />
                  <CardContent style={{ backgroundColor: "#ef2727" }}>
                    <Typography variant="body2" color="white">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient( #d7d7e9, #e9e9e9,#e9cfcf)",
          // backgroundColor: "#e9e9e9",
          marginTop: "100px",
        }}
      >
        <div className="container pt-5 pb-5">
          <h1 className="text-center mb-5" style={{ fontWeight: "bold" }}>
            You are looking for...
          </h1>
          <div className="col-12">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-lg-4 col-md-6">
                <Card
                  sx={{ maxWidth: 495 }}
                  style={{ boxShadow: "0px 0px 0px 0px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image="https://firebasestorage.googleapis.com/v0/b/dicazo-demo.appspot.com/o/abc1t.png?alt=media&token=51b800dd-31e0-48bd-ae19-1b41c61ee4d2"
                  />
                  <CardContent
                    style={{
                      // backgroundImage:
                      // "linear-gradient( #d7d7e9, #e9e9e9,#e9cfcf)",
                      backgroundColor: "inherit",
                    }}
                  >
                    <Typography style={{ color: "red", fontWeight: "600" }}>
                      CAMPUS ACTIVITIES
                    </Typography>
                    <hr style={{ height: "2px" }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        maxHeight: "75px",
                        height: "75px",
                        textAlign: "justify",
                        overflow: "hidden",
                      }}
                    >
                      Anu are a widespread group of squamate reptiles, with over
                      6,000 species, ranging across all continents except
                      ranging across all continents except Antarctica Lorem
                      ipsum dolor sit amet consectetur, adipisicing elit. Quae
                      quasi explicabo sequi in hic fugiat quia accusantium esse
                      qui ipsum officiis ipsam, velit eaque, rem optio ducimus
                      sed, corrupti ratione?
                    </Typography>
                    <hr />
                    <small
                      style={{
                        float: "right",
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      Go to Newsroom &gt;
                    </small>
                  </CardContent>
                </Card>
              </div>

              <div className="col-lg-4 col-md-6">
                <Card
                  sx={{ maxWidth: 495 }}
                  style={{ boxShadow: "0px 0px 0px 0px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image="https://firebasestorage.googleapis.com/v0/b/dicazo-demo.appspot.com/o/abc2tt.png?alt=media&token=feb2a758-e569-403d-acfc-c4425eae56fd"
                  />
                  <CardContent style={{ backgroundColor: "transparent" }}>
                    <Typography style={{ color: "red", fontWeight: "600" }}>
                      UNIVERSITY E-SERVICES
                    </Typography>
                    <hr style={{ height: "2px" }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        maxHeight: "75px",
                        height: "75px",
                        overflow: "hidden",
                        textAlign: "justify",
                      }}
                    >
                      Abc are a widespread group of squamate reptiles, with over
                      6,000 species, ranging across all continents except
                      species, ranging across all continents except species,
                      ranging across all continents except species, ranging
                      across all continents except Antarctica...
                    </Typography>
                    <hr />
                    <small
                      style={{
                        float: "right",
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      Switch to IUMS &gt;
                    </small>
                  </CardContent>
                </Card>
              </div>
              <div className="col-lg-4 col-md-6">
                <Card
                  sx={{ maxWidth: 495 }}
                  style={{ boxShadow: "0px 0px 0px 0px" }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="240"
                    image="https://firebasestorage.googleapis.com/v0/b/dicazo-demo.appspot.com/o/abc3t.png?alt=media&token=eec2da45-46c8-45ee-a195-d485abeb9674"
                  />
                  <CardContent style={{}}>
                    <Typography style={{ color: "red", fontWeight: "600" }}>
                      UG {"&"} PG ADMISSIONS
                    </Typography>
                    <hr style={{ height: "2px" }} />
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        maxHeight: "75px",
                        height: "75px",
                        textAlign: "justify",
                        overflow: "hidden",
                      }}
                    >
                      Abc are a widespread group of squamate reptiles, with over
                      6,000 species, ranging across all continents except
                      species, ranging across all continents except
                      Antarctica...
                    </Typography>
                    <hr />
                    <small
                      style={{
                        float: "right",
                        color: "red",
                        fontWeight: "600",
                      }}
                    >
                      More details &gt;
                    </small>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;

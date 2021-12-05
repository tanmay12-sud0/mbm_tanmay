import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
function home() {
  return (
    <div>
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
                      border: "2px solid #ef2727",
                    }}
                    alt="Remy Sharp"
                    src="https://th.bing.com/th/id/OIP.wUk9lMqzmr9pthy8K3NHGwHaE2?pid=ImgDet&rs=1"
                    sx={{ width: 250, height: 250 }}
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
                        fontSize: "15px",
                        color: "red",
                        marginBottom: "2px",
                        marginTop: "6px",
                      }}
                    >
                      Prof. Ajay Kumar Sharma
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginBottom: "1px",
                        marginTop: "0px",
                      }}
                    >
                      Hon'ble Vice Chancellor
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        marginBottom: "1px",
                        marginTop: "0px",
                      }}
                    >
                      MBM UNIVERSITY
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
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
    </div>
  );
}

export default home;

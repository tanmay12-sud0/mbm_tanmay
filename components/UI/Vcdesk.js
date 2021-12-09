import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
function Vcdesk() {
  return (
    <div>
      <div className="row" style={{ marginTop: "100px" }}>
        <div className="col-lg-8 col-12">
          <h1 style={{ marginBottom: "30px" }}>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                fontFamily: "Ubuntu",
              }}
            >
              From{" "}
            </span>
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                color: "red",
                fontFamily: "Ubuntu",
              }}
            >
              Vice Chancellor's
            </span>{" "}
            <span
              style={{
                fontSize: "1.8rem",
                fontWeight: "bold",
                fontFamily: "Ubuntu",
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
                  id autem molestias asperiores, iste at voluptate sapiente odio
                  provident?
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
                    fontFamily: "Ubuntu",
                  }}
                >
                  Recent
                </span>{" "}
                <span
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    fontFamily: "Ubuntu",
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
  );
}

export default Vcdesk;

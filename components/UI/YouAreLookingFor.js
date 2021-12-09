import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
function YouAreLookingFor() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "linear-gradient( #d7d7e9, #e9e9e9,#e9cfcf)",
          // backgroundColor: "#e9e9e9",
          marginTop: "100px",
        }}
      >
        <div className="container pt-5 pb-5">
          <h1
            className="text-center mb-5"
            style={{
              fontWeight: "bold",
              fontFamily: "ubuntu",
              fontSize: "38px",
            }}
          >
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
                    <Typography
                      style={{
                        color: "#cc0c1e",
                        fontWeight: "700",
                        fontFamily: "ubuntu",
                        fontSize: "18px",
                        lineHeight: "22px",
                      }}
                    >
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
                        fontFamily: "PT Sans",
                        letterSpacing: "0",
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
                        color: "#e73f4e",
                        fontWeight: "700",
                        fontFamily: "PT Sans",
                        fontSize: "16px",
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
                    <Typography
                      style={{
                        color: "#cc0c1e",
                        fontWeight: "700",
                        fontFamily: "ubuntu",
                        fontSize: "18px",
                        lineHeight: "22px",
                      }}
                    >
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
                        fontFamily: "PT Sans",
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
                        color: "#e73f4e",
                        fontWeight: "700",
                        fontFamily: "PT Sans",
                        fontSize: "16px",
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
                    <Typography
                      style={{
                        color: "#cc0c1e",
                        fontWeight: "700",
                        fontFamily: "ubuntu",
                        fontSize: "18px",
                        lineHeight: "22px",
                      }}
                    >
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
                        fontFamily: "PT Sans",
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
                        color: "#e73f4e",
                        fontWeight: "700",
                        fontFamily: "PT Sans",
                        fontSize: "16px",
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

export default YouAreLookingFor;

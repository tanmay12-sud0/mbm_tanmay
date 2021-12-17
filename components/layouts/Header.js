import React,{useEffect} from "react";
// import Head from "next/head";
// import Link from "next/link";
import { Modal } from "react-bootstrap";
// import { IoIosMailOpen } from "react-icons/io";
// import MenuList from "../UI/MenuList";
import PageTitle from "../ui/PageTitle";
// import MBM_API from "apis";

import RoomIcon from "@mui/icons-material/Room";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState } from "react";
// import { useEffect } from "react";
import HeadNavbarDrawer from "../ui/HeadNavbarDrawer";
import AppsIcon from "@mui/icons-material/Apps";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import MBM_API from "../../apis";
export default function Header({ menus, globalVariables }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ContactPopup = ({ text }) => {

    const getData = async() => {
      try {
         let res = await MBM_API.getHeader({
          search: "mbm_university_text"
         });
         console.log(res.data)
      } catch (error) {
        
      }
    }
  
    useEffect(async () => {
        getData();
    }, []);



    return (
      <>
        <button className="header-contact-popup-button" onClick={handleShow}>
          {text}
        </button>
        <Modal
          show={show}
          onHide={handleClose}
          animation={true}
          dialogClassName="modal-container"
        >
          <Modal.Header closeButton style={{ height: "40px" }}>
            <Modal.Title style={{ fontSize: "20px" }}>
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#cc0c1e",
                }}
              >
                CONTACT
              </span>{" "}
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                INFORMATION
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-12">
              <div className="row">
                <div className="col-8">
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                        marginBottom: "0px",
                      }}
                    >
                      <span>
                        VICE CHANCELLOR's SECRETARIAT{" "}
                        <small style={{ color: "#cc0c1e" }}>[more info]</small>
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                      }}
                    >
                      <span style={{ color: "#cc0c1e" }}>T:</span>{" "}
                      <span>
                        +91-291-2514790{" "}
                        <span style={{ color: "#cc0c1e" }}>E:</span>{" "}
                        vc@mbm.ac.in
                      </span>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                        marginBottom: "0px",
                      }}
                    >
                      <span>
                        REGISTRAR'S OFFICE
                        <small style={{ color: "#cc0c1e" }}> [more info]</small>
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                      }}
                    >
                      <span style={{ color: "#cc0c1e" }}>T:</span>{" "}
                      <span>
                        +91-291-2514790{" "}
                        <span style={{ color: "#cc0c1e" }}>E:</span>{" "}
                        registrar@mbm.ac.in
                      </span>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                        marginBottom: "0px",
                      }}
                    >
                      <span>
                        PUBLIC RELATION'S OFFICE
                        <small style={{ color: "#cc0c1e" }}> [more info]</small>
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                      }}
                    >
                      <span style={{ color: "#cc0c1e" }}>T:</span>{" "}
                      <span>
                        +91-291-2514790{" "}
                        <span style={{ color: "#cc0c1e" }}>E:</span>{" "}
                        pro@mbm.ac.in
                      </span>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                        marginBottom: "0px",
                      }}
                    >
                      <span>
                        DEAN (STUDENT AFFAIRS)
                        <small style={{ color: "#cc0c1e" }}> [more info]</small>
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                      }}
                    >
                      <span style={{ color: "#cc0c1e" }}>T:</span>{" "}
                      <span>
                        +91-291-2514790{" "}
                        <span style={{ color: "#cc0c1e" }}>E:</span>{" "}
                        dean.sa@mbm.ac.in
                      </span>
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                        marginBottom: "0px",
                      }}
                    >
                      <span>
                        CHIEF PROCTOR
                        <small style={{ color: "#cc0c1e" }}> [more info]</small>
                      </span>{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#29425f",
                      }}
                    >
                      <span style={{ color: "#cc0c1e" }}>T:</span>{" "}
                      <span>
                        +91-291-2514790{" "}
                        <span style={{ color: "#cc0c1e" }}>E:</span>{" "}
                        proctor@mbm.ac.in
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <div style={{ maxWidth: "200px", float: "right" }}>
                    <div
                      style={{
                        border: "2px dashed #29425f",
                        textAlign: "center",
                        padding: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#29425f",
                          margin: "0px",
                        }}
                      >
                        POSTAL <span style={{ color: "#cc0c1e" }}>ADDRESS</span>
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#29425f",
                          marginBottom: "0px",
                        }}
                      >
                        Ratanada, Jodhpur
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",

                          color: "#cc0c1e",
                          marginBottom: "0px",
                        }}
                      >
                        Rajasthan -342011
                      </p>
                    </div>{" "}
                    <div
                      style={{
                        border: "2px dashed #29425f",
                        textAlign: "center",
                        padding: "5px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#29425f",
                          margin: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        Office <span style={{ color: "#cc0c1e" }}>TIMINGS</span>
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",

                          color: "#29425f",
                          marginBottom: "0px",
                        }}
                      >
                        Monday-Saturday
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",

                          color: "#cc0c1e",
                          marginBottom: "0px",
                        }}
                      >
                        10 AM - 5 PM
                      </p>
                    </div>{" "}
                    <div
                      style={{
                        border: "2px dashed #29425f",
                        textAlign: "center",
                        padding: "5px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          color: "#29425f",
                          margin: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        ONLINE <span style={{ color: "#cc0c1e" }}>LINKS</span>
                      </p>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          color: "#29425f",
                          marginTop: "10px",
                          marginBottom: "0px",
                          paddingBottom: "10px",
                        }}
                      >
                        <a
                          href="#"
                          style={{
                            color: "#29425f",
                          }}
                        >
                          <FacebookIcon></FacebookIcon>
                        </a>
                        <a
                          href="#"
                          style={{
                            color: "red",
                          }}
                        >
                          <InstagramIcon></InstagramIcon>
                        </a>
                        <a
                          href="#"
                          style={{
                            color: "#0d6efd",
                          }}
                        >
                          <TwitterIcon></TwitterIcon>
                        </a>
                      </p>
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "#cc0c1e",
                          marginBottom: "0px",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <div className="header-background">
      <div className="container pb-3">
        <div className="row">
          <div className="col-md-4 col-12 logoCard">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/dicazo-demo.appspot.com/o/LOGO.png?alt=media&token=6f8dcbde-bf64-48d0-ae81-f186c9e72208"
              alt="MBM LOGO"
              className=" topHeaderLogo"
            />
          </div>
          <div className="col-md-8 col-12 topLinks">
            <div>
              <div style={{ lineHeight: "31px" }}>
                <a
                  href="#!"
                  className="header-nav-link"
                  style={{ color: "black" }}
                >
                  Placements
                </a>
                {"  |  "}
                <a
                  href="#!"
                  className="header-nav-link"
                  style={{ color: "black" }}
                >
                  News & Updates
                </a>
                {"  |  "}
                <a
                  href="#!"
                  className="header-nav-link"
                  style={{ color: "black" }}
                >
                  University IUMS
                </a>
                <a
                  href="#!"
                  className="header-nav-link"
                  style={{ color: "black" }}
                >
                  <HeadNavbarDrawer
                    insideText={
                      <>
                        <AppsIcon /> Site Menu
                      </>
                    }
                  />
                </a>
              </div>
            </div>
            <div>
              <div style={{ lineHeight: "41px" }}>
                <a href="#!" className="header-contact-link">
                  {
                    <ContactPopup
                      text={
                        <>
                          <ContactPhoneIcon /> Contact Information
                        </>
                      }
                    />
                  }
                </a>
                {"   |   "}
                <a href="#!" className="header-contact-link">
                  <RoomIcon />
                  Locate on Map
                </a>
              </div>
            </div>

            <div style={{ lineHeight: "41px" }}>
              <div className="pageTitle">
                <p style={{ color: "#cc0c1e", fontFamily: "Ubuntu" }}>
                  ABOUT{" "}
                  <span style={{ color: "#29425f", fontFamily: "Ubuntu" }}>
                    MBM
                  </span>
                </p>
                {/* <PageTitle title="ABOUT MBM" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "wrap",
      }}
    >
      <img
        className="card-img img "
        style={{ width: "18rem" }}
        src="https://res.cloudinary.com/dzsnoyohi/image/upload/v1637565850/samples/MBM-LOGO-header_v3tebz.png"
        alt="MBM LOGO"
      />
      <div >
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <p href="#!" className="header-nav-link">
            Placements
          </p>
          {"  |  "}
          <p href="#!" className="header-nav-link">
            New & Updates
          </p>
          {"  |  "}
          <p href="#!" className="header-nav-link">
            University IUMS
          </p>
        </div>
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <a href="#!" className="header-contact-link">
            {
              <ContactPopup
                text={
                  <>
                    <ContactPhoneIcon /> Contact Information
                  </>
                }
              />
            }
          </a>
          {"   |   "}
          <a href="#!" className="header-contact-link">
            <RoomIcon />
          Locate on Map
          </a>
        </div>
        <PageTitle title="ABOUT MBM" />
      </div>
    </div> */
}

// TODO:currently not being used, import it in header use as  separate component

import React from "react";
import { Modal } from "react-bootstrap";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import { useState } from "react";

export const HeadContactPopup = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className="header-contact-popup-button" onClick={handleShow}>
        {
          <>
            <ContactPhoneIcon /> Contact Information
          </>
        }
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
                color: "red",
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
                      <small style={{ color: "red" }}>[more info]</small>
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#29425f",
                    }}
                  >
                    <span style={{ color: "red" }}>T:</span>{" "}
                    <span>
                      +91-291-2514790 <span style={{ color: "red" }}>E:</span>{" "}
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
                      <small style={{ color: "red" }}> [more info]</small>
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#29425f",
                    }}
                  >
                    <span style={{ color: "red" }}>T:</span>{" "}
                    <span>
                      +91-291-2514790 <span style={{ color: "red" }}>E:</span>{" "}
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
                      <small style={{ color: "red" }}> [more info]</small>
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#29425f",
                    }}
                  >
                    <span style={{ color: "red" }}>T:</span>{" "}
                    <span>
                      +91-291-2514790 <span style={{ color: "red" }}>E:</span>{" "}
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
                      <small style={{ color: "red" }}> [more info]</small>
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#29425f",
                    }}
                  >
                    <span style={{ color: "red" }}>T:</span>{" "}
                    <span>
                      +91-291-2514790 <span style={{ color: "red" }}>E:</span>{" "}
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
                      <small style={{ color: "red" }}> [more info]</small>
                    </span>{" "}
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#29425f",
                    }}
                  >
                    <span style={{ color: "red" }}>T:</span>{" "}
                    <span>
                      +91-291-2514790 <span style={{ color: "red" }}>E:</span>{" "}
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
                      POSTAL <span style={{ color: "red" }}>ADDRESS</span>
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

                        color: "red",
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
                      Office <span style={{ color: "red" }}>TIMINGS</span>
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

                        color: "red",
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
                      ONLINE <span style={{ color: "red" }}>LINKS</span>
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
                        color: "red",
                        marginBottom: "0px",
                      }}
                    >
                      Rajasthan -342011
                    </p>
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

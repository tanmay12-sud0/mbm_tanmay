import React from "react";
import Head from "next/head";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FooterCard({ menus }) {
  return (
    <>
      <Head>
        <title>MBM University</title>
        <meta name="description" content="MBM University" />
      </Head>
      <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <div className="footer-pad">
                  <img
                    src="https://res.cloudinary.com/dzsnoyohi/image/upload/v1636602578/samples/MBM_LOGO_fq7956.png"
                    alt="MBM LOGO"
                    className="footer-logo"
                  />
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col footer-quick-links">
                    <p>Quick Links</p>
                  </div>
                  <hr />
                </div>
                <div className="row align-items-center mt-2">
                  <div className="col">
                    <div className="footer-pad">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Site Home</a>
                        </li>
                        <li>
                          <a href="#">Vision & Mission</a>
                        </li>
                        <li>
                          <a href="#">University Handbook</a>
                        </li>
                        <li>
                          <a href="#">Public Tenders</a>
                        </li>
                        <li>
                          <a href="#">Telephone Directory</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="footer-pad">
                      <ul className="list-unstyled">
                        <li>
                          <a href="#">Research & Collaboration</a>
                        </li>
                        <li>
                          <a href="#">Administration</a>
                        </li>
                        <li>
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                          <a href="#">Student Grievance Redressal</a>
                        </li>
                        <li>
                          <a href="#">MBMEC Alumni Association</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col">
                    <div className="footer-pad">
                      <ul className="list-unstyled">
                        <li>
                          <p>This Website is Developed & Maintained by</p>
                          <p>
                            <a href="#!" className="footerTeacherLink">
                              Our Students & Teachers
                            </a>
                          </p>
                        </li>

                        <li>
                          <p>Follow MBM University on</p>
                        </li>
                        <li>
                          <div className="row">
                            <div className="col">
                              <a href="#">
                                <FacebookIcon />
                              </a>
                            </div>
                            <div className="col">
                              <a href="#">
                                <InstagramIcon />
                              </a>
                            </div>
                            <div className="col">
                              <a href="#">
                                <TwitterIcon />
                              </a>
                            </div>
                            <div className="col-md-6"></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 copy">
                    <p className="text-right h6">
                      &copy; Copyright 2021 MBM University, Jodhpur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </footer>
    </>
  );
}

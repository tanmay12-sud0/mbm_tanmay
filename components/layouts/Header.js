import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import { IoIosMailOpen } from "react-icons/io";
import MenuList from "../UI/MenuList";
import PageTitle from "../UI/PageTitle";
import RoomIcon from "@mui/icons-material/Room";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export default function Header({ menus, globalVariables }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexFlow: "wrap",
      }}
    >
      <img
        className="header-logo"
        src="https://res.cloudinary.com/dzsnoyohi/image/upload/v1637565850/samples/MBM-LOGO-header_v3tebz.png"
        alt="MBM LOGO"
      />
      <div className="header-right-content">
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <p href="#!" className="header-nav-link">
            Placements
          </p>
          {" | "}
          <p href="#!" className="header-nav-link">
            New & Updates
          </p>
          {" | "}
          <p href="#!" className="header-nav-link">
            University IUMS
          </p>
        </div>
        <div style={{ display: "flex", flexFlow: "wrap" }}>
          <a href="#!" className="header-contact-link">
            <ContactPhoneIcon />
            Contact Information
          </a>
          {"  |  "}
          <a href="#!" className="header-contact-link">
            <RoomIcon />
            {"   "}Locate on Map
          </a>
        </div>
        <PageTitle title="ABOUT MBM" />
      </div>
    </div>
  );
}

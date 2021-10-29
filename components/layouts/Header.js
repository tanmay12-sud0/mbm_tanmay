import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Navbar, Container } from "react-bootstrap";
import { IoIosMailOpen } from "react-icons/io";
import MenuList from "../UI/MenuList";
export default function Header({ menus }) {
  return (
    <>
      <Head>
        <title>MBM University</title>
        <meta name="description" content="MBM University" />
      </Head>
      <Navbar fixed="top" className="mbm-main-header" expand="lg">
        <Container className="header-container" fluid>
        <div className="w-100 d-flex flex-wrap">
          <Link href="/">
            <Navbar.Brand
              className="text-white d-flex cursor-pointer align-items-start font-weight-bold"
            >
              <img
                className="mbm-logo mx-2"
                src="https://mbm.ac.in/wp-content/uploads/2020/12/cropped-MBM-LOGO-80x80.png"
              />
              <div className="m-auto">
                <h2 className="text-white header-title m-auto">MBM University</h2>
                <p className="m-0 font-weight-100 text-whitegray d-xs-none">
                  Mugneeram Bangur Memorial Engineering College
                </p>
              </div>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle className="m-auto" aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white d-flex align-items-center justify-content-center">
              <IoIosMailOpen/> deanmbm@jnvu.edu.in
            </Navbar.Text>
          </Navbar.Collapse>
        </div>
        <div className="w-100 text-center"><MenuList menus={menus}/></div>
        </Container>
      </Navbar>
    </>
  );
}

import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import Link from "next/link";
function MenuList({menus}) {
  return (
    <div>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto nav-menus my-2 my-lg-0 align-items-center"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Link href="/"><Button variant="link" className="anchor-white">Home</Button></Link>
          {
            menus.map((item) => <>  
               <NavDropdown
                    key={item.type}
                    id={item.type}
                    className="header-menus-dropdown"
                    title={
                    <Button
                        variant="link"
                        container="true"
                        className="p-1 anchor-white"
                        onMouseEnter={() =>
                        document.getElementById(item.type).click()
                        }
                    >
                        <Link href={`${item.type}`}><a className="anchor-white">{item.type}</a></Link>
                    </Button>
                    }
                >
                    {
                        item.links.map((link) => (
                           <NavDropdown.Item key={link}> <Link href={`/${item.type}/${link}`}><a className="anchor">{link}</a></Link></NavDropdown.Item>
                        ))
                    }
                </NavDropdown>
            </>)  
          }
        </Nav>
      </Navbar.Collapse>
    </div>
  );
}

export default MenuList;

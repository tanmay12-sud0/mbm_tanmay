import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
// import "./HeadNavbarDrawer.css";

// Responsive
import { useMediaQuery } from "react-responsive";

const style = {
  backgroundColor: "rgb(46, 53, 62)",
  border: "0",
  color: "white",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRadius: "3px",
};

export default function HeadNavbarDrawer({ insideText }) {
  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false);

  // For responsive table
  // edit width here
  let drawerWidth = "auto";
  let anchor = "top";
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1078px)",
  });
  if (isTabletOrMobileDevice) {
    drawerWidth = "320px";
    anchor = "left";
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawerIsOpen(open);
  };

  const list = () => (
    // EDIT Drawer here
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      {/* start Drawer Code*/}
      <div className="head-drawer">
        <div className="headdrawer-top">
          <p className="explore-web">Explore Our Website..</p>
          <p className="close-drawer">
            click to close{" "}
            <button
              className="btn btn-primary"
              style={{
                fontSize: "20px",
                padding: "0px 10px",
                border: "2px solid white",
                borderRadius: "0",
              }}
            >
              &times;
            </button>
          </p>
        </div>
        <Divider style={{ color: "white" }} />
        <div className="links-box">
          <div className="links-1">
            <ul style={{ marginTop: "12px", marginLeft: "-30px" }}>
              <a href="#">Site Home</a>
              <a href="#">About MBM Univ</a>
              <a href="#">Vission & Mission</a>
              <a href="#">Campus & Infra</a>
              <a href="#">Acts & Ordinances</a>
              <a href="#">Annual Reports</a>
              <a href="#">Notices & orders</a>
              <a href="#">Public Tenders</a>
              <a href="#">News & Updates</a>
              <a href="#">Photo Gallery</a>
              <a href="#">Downloads</a>
              <a href="#">Frequent Question</a>
            </ul>
          </div>
          <hr
            style={{
              width: "300px",
              height: "1px",
              transform: "rotate(90deg)",
              marginTop: "160px",
              marginLeft: "-130px",
              marginRight: "-160px",
            }}
          />
          <div className="links-2">
            <div className="link-nav">
              <ul>
                <a href="#">
                  <hr className="link-nav-vhr" />
                  Acadmics
                  <hr className="link-nav-hhr" style={{ width: "95px" }} />
                </a>
                <a href="#">
                  <hr className="link-nav-vhr" />
                  Administration
                  <hr className="link-nav-hhr" style={{ width: "125px" }} />
                </a>
                <a href="#">
                  <hr className="link-nav-vhr" />
                  Committe
                  <hr className="link-nav-hhr" style={{ width: "95px" }} />
                </a>
                <a href="#">
                  <hr className="link-nav-vhr" />
                  Resources
                  <hr className="link-nav-hhr" style={{ width: "95px" }} />
                </a>
                <a href="#">
                  <hr className="link-nav-vhr" />
                  Important Links
                  <hr className="link-nav-hhr" style={{ width: "150px" }} />
                </a>
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="links-1" style={{ marginTop: "0px" }}>
                <ul>
                  <a href="#">Chancler</a>
                  <a href="#">Vice Chancler</a>
                  <a href="#">Registrar</a>
                  <a href="#">Finance Officer</a>
                  <a href="#">Dean (Student & Affair)</a>
                  <a href="#">Deans of Faculties</a>
                  <a href="#">Estate officers</a>
                  <a href="#">Public Relations</a>
                  <a href="#">Security Officer</a>
                </ul>
              </div>
              <div className="links-1">
                <ul>
                  <a href="#">Accounts Section</a>
                  <a href="#">Acadmic Section</a>
                  <a href="#">Development Section</a>
                  <a href="#">Establishment Section</a>
                  <a href="#">Examination Section</a>
                  <a href="#">Finance Section</a>
                  <a href="#">Secerecy Section</a>
                  <a href="#">Equity Section</a>
                  <a href="#">Stores & Purchase Section</a>
                </ul>
              </div>
              <div className="links-1" style={{ marginTop: "0px" }}>
                <ul>
                  <a href="#">Board of Management</a>
                  <a href="#">Academic Council</a>
                  <a href="#">Board of Studies</a>
                  <a href="#">Research Board</a>
                  <a href="#">Computer Center</a>
                  <a href="#">Internal Quality Assurance</a>
                  <a href="#">Legal Call</a>
                  <a href="#">Rajsabha Cell</a>
                  <a href="#">Grievance Cell</a>
                </ul>
              </div>
            </div>
          </div>
          <div className="links-3">
            <div className="useful">
              <p
                style={{
                  color: "white",
                  margin: "6px 0 10px 12px",
                  fontSize: "20px",
                }}
              >
                Most Useful Links
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  paddingLeft: "0",
                  marginLeft: "12px",
                }}
              >
                <a href="#">University Iums</a>
                <a href="#">Raj Bhawan Website</a>
                <a href="#">E-learning & MOOC's</a>
                <a href="#">Anti-Ragging Website</a>
                <a href="#">Stakeholder's Feedback</a>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "rgb(161, 180, 202)",
                margin: "15px 0",
                padding: "20px",
              }}
            >
              <p>
                For placement and <br />
                Collaboration activities
              </p>
              <a href="#" className="tpolink">
                Switch TO TPO Site
              </a>
            </div>
          </div>
        </div>
        <Divider />
      </div>
      {/*end Drawer Code*/}
    </Box>
  );

  return (
    <span style={{ marginLeft: "20px" }}>
      <button onClick={toggleDrawer(true)} style={style}>
        {insideText}
      </button>
      <Drawer anchor={anchor} open={drawerIsOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </span>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import darkGrey from "../../colors";

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

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;

    setDrawerIsOpen(open);
  };

  const list = () => (
    //   TODO: EDIT Drawer here
    <Box
      sx={{ width: 500 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
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
      </List>
    </Box>
  );

  return (
    <span style={{ marginLeft: "20px" }}>
      <button onClick={toggleDrawer(true)} style={style}>
        {insideText}
      </button>
      <Drawer anchor="top" open={drawerIsOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </span>
  );
}

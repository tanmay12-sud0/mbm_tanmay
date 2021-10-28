import React from "react";
import { Card } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

const Highlights = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)",
  });
  const style = {
    container: {
      textAlign: "center",
      width: isTabletOrMobileDevice ? "80vw" : "30vw",
    },
  };
  return (
    <>
      <Card style={style.container}>
        <Card.Header>Highlights</Card.Header>
        <Card.Body>MBM University is launching a new website</Card.Body>
      </Card>
    </>
  );
};

export default Highlights;

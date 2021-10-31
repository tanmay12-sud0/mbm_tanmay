import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Highlights = () => {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header
        className="text-center"
        style={{
          color: "black",
          background: "transparent",
          color: "white",
          backgroundColor: "#246a64",
        }}
      >
        Highlights
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Highlights;

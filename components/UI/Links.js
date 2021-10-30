import React from "react";
import { Card, ListGroup } from "react-bootstrap";
function Links() {
  return (
    <Card style={{ width: "100%" }}>
      <Card.Header
        className="text-center"
        style={{ color: "black", background: "transparent" }}
      >
        Hyper Links
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Links;

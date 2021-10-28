import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
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
    <CardGroup style={style.container}>
      <Row xs={1} md={1} className="g-4">
        <Card.Header>Highlights</Card.Header>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://imgr.search.brave.com/LEQ03RgAKidYivi-FI-gByRpzEeTHpQLsV_pQoE_BLY/fit/711/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/dkY2QnhTSkdlZVdr/N3JTOF9zdnFRSGFF/OCZwaWQ9QXBp"
            />
            <Card.Title>New Website</Card.Title>
            <Card.Body>MBM University is launching a new website</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://imgr.search.brave.com/xmsRvhfAwwP1CUZiJuXfF1Xl9rLFaXB1Vw0l9LaW0Yw/fit/775/400/ce/1/aHR0cHM6Ly9zZW9m/aWxlcy5zMy5hbWF6/b25hd3MuY29tL3Nl/by9tZWRpYS91cGxv/YWRzLzIwMTgvMDgv/MTAvcGxhY2VtZW50/LW9mZmljZXItb3It/cGxhY2VtZW50LWNl/bGwuanBn"
            />
            <Card.Title>Placement</Card.Title>
            <Card.Body>
              MBM University Is above all IITs - UNO{" "}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </CardGroup>
  );
};

export default Highlights;

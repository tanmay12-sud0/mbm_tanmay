import React from "react";
import { Alert } from "react-bootstrap";
import BreadcrumbComponent from "../../components/common/BreadcrumbComponent.jsx";

function Home() {
  const items = [
    { title: "home", link: "#!" },
    { title: "articles", link: "#!" },
  ];
  return (
    <React.Fragment>
      <BreadcrumbComponent items={items} />
      <Alert variant="success">Hello MBM, we are using react-bootstrap</Alert>
    </React.Fragment>
  );
}

export default Home;

import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbComponent = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Articles
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Placements</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;

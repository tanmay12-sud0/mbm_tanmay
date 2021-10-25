import Breadcrumb from "react-bootstrap/Breadcrumb";

import React from "react";

/**
 * @params array of objects with element name and link that are needed in breadcrumb in order of next one being child of previous element
 * @returns breadcrumb component
 */
const BreadcrumbComponent = ({ items }) => {
  return (
    <div>
      <Breadcrumb>
        {items.map((item) => (
          <Breadcrumb.Item href={item.link}>{item.title}</Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;

import React from "react";
import {useRouter} from "next/router";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbComponent = () => {
  const {Category=null, content=[]} = useRouter().query;
  console.log(Category, content)
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">{Category && Category}</Breadcrumb.Item>
        {
          content.map((item) => (
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              {item}
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;

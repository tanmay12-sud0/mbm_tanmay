import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function CustomBreadcrumb({content}) {
  return (
    <div>
      <Breadcrumb>
       {
         content.map((item) => 
           <Breadcrumb.Item href="#">{item}</Breadcrumb.Item>
         )
       }
      </Breadcrumb>
    </div>
  );
}

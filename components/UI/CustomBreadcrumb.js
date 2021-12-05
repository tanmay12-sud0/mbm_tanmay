import React from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";

const BreadcrumbComponent = () => {
  const { Category = null, content = [] } = useRouter().query;
  const router = useRouter();
  // console.log(useRouter().query);
  return (
    <div
      className=" d-flex "
      style={{
        color: "white",
        background: "#29425f",
        paddingLeft: "30px",
        paddingRight: "30px",
        alignItems: "center",
      }}
    >
      <div
        className=" d-flex "
        style={{ flex: 1, width: "100%", alignItems: "center" }}
      >
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <Link
              href="/"
              style={{
                color: "white",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Home
              {/* <a style={{ color: "white", alignItems: "center", textDecoration:"none" }}>Home</a> */}
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">{Category && Category}</Breadcrumb.Item>
          {content.map((item) => (
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              <Link href={`/${item}`}>
                <a onClick={() => router.push(`/${item}`)}>{item}</a>
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
       
      </div>

      <div className=" d-flex " style={{ justifyContent: "flex-end" }}>
        ...a story of legacy, excellence and diversity
      </div>
    </div>
  );
};

export default BreadcrumbComponent;

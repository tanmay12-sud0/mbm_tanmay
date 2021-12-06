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
       
        alignItems: "center",
      }}
    >
      <span className="container">
        <span
          className=" d-flex "
          style={{   alignItems: "center" }}
        >
          home
          {/* <Breadcrumb>
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
          </Breadcrumb> */}
        </span>

        <span
          // className="d-flex "
          // style={{ justifyContent: "flex-end", alignItems: "center" }}
        >
          ...a story of legacy, excellence and diversity
        </span>
      </span>
    </div>
  );
};

export default BreadcrumbComponent;

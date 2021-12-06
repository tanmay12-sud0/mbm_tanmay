import React from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
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
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <p
              style={{
                float: "left",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                padding: "3px",
                // fontSize: "20px",
              }}
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
                href=""
              >
                <HomeIcon style={{ marginTop: "-5px" }}></HomeIcon> home 
                <ArrowLeftIcon></ArrowLeftIcon>
              </a>
            </p>
           
          </div>
          <div className="col-lg-6 col-12 text-center">
          
            <p
              style={{
                float: "right",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                padding: "3px",
                // fontSize: "20px",
              }}
            >
              ...a story of legacy, excellence and diversity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
//  <div
//         className=" d-flex "
//         style={{ flex: 1, width: "100%", alignItems: "center" }}
//       >
//         <Breadcrumb>
//           <Breadcrumb.Item href="#">
//             <Link
//               href="/"
//               style={{
//                 color: "white",
//                 alignItems: "center",
//                 textDecoration: "none",
//               }}
//             >
//               Home
//               {/* <a style={{ color: "white", alignItems: "center", textDecoration:"none" }}>Home</a> */}
//             </Link>
//           </Breadcrumb.Item>
//           <Breadcrumb.Item href="#">{Category && Category}</Breadcrumb.Item>
//           {content.map((item) => (
//             <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
//               <Link href={`/${item}`}>
//                 <a onClick={() => router.push(`/${item}`)}>{item}</a>
//               </Link>
//             </Breadcrumb.Item>
//           ))}
//         </Breadcrumb>

//       </div>

//       <div className=" d-flex " style={{ justifyContent: "flex-end" }}>
//
//       </div>

import React from "react";
import {useRouter} from "next/router";
import { Breadcrumb } from "react-bootstrap";
import Link from "next/link";

const BreadcrumbComponent = () => {
  const {Category=null, content=[]} = useRouter().query;
  const router = useRouter();
  console.log(Category, content)
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#"><Link href="/"><a>Home</a></Link></Breadcrumb.Item>
        <Breadcrumb.Item href="#">{Category && Category}</Breadcrumb.Item>
        {
          content.map((item) => (
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              <Link href={`/${item}`}><a onClick={()=>router.push(`/${item}`)}>{item}</a></Link>
            </Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;

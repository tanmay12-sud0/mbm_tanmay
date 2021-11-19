import React from "react";
import { useRouter } from "next/router";
import BreadcrumbComponent from "../../components/UI/CustomBreadcrumb";
import CustomBanner from "../../components/UI/CustomBanner";

function Category({ page_data }) {
  console.log("page_data", page_data);
  return (
    <div>
      <CustomBanner />
      <div className="container">
        <BreadcrumbComponent />
      </div>
      <div dangerouslySetInnerHTML={{__html: page_data?.description}}  className="container" />
    </div>
  );
}

export async function getServerSideProps(context) {
  let { Category } = context.query;
  const res = await fetch(
    `https://617eaf012ff7e600174bd8ba.mockapi.io/api/v1/page-category`
  );
  const data = await res.json();
  const page_data = data.filter((page) => page.name === Category);
  if (!page_data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: { page_data: page_data.length && page_data[page_data.length - 1] },
  };
}

export default Category;

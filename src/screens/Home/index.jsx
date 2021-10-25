import React from "react";
import BreadcrumbComponent from "../../components/common/BreadcrumbComponent.jsx";
import MenuBar from "../../components/modules/MenuBar";

function Home() {
  const items = [
    { title: "home", link: "#!" },
    { title: "categories", link: "#!" },
    { title: "articles", link: "#!" },
    { title: "article page", link: "#!" },
  ];
  const sideContent = (
    <div style={{ padding: "10px", width: "25vw", height: "45vh" }}>
      <h3>Item 1</h3>
      <p>
        in publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content.
      </p>
      <br />
      <h3>Item 2</h3>
      <h3>Item 3</h3>
    </div>
  );
  return (
    <React.Fragment>
      <MenuBar sideContent={sideContent}>
        <br />
        <BreadcrumbComponent items={items} />
      </MenuBar>
    </React.Fragment>
  );
}

export default Home;

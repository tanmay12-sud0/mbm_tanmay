// import HomeCarousel from "../components/UI/HomeCarousel";
// import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";

import MainBody from "../components/ui/MainBody";

// import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/ui/CustomBreadcrumb";
import RelatedLinks from "../components/ui/RelatedLinks";
import ArticleCard from "../components/ui/ArticleCard";

function Home() {
  const data =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, corrupti cum. Hic, quis? Voluptates facere ";
  return (
    <>
      <div>
        <BreadcrumbComponent />

        <div className="container">
          <div className="row d-flex ">
            <MainBody />=
          </div>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "7vw",
            paddingRight: "7vw",
          }}
        >
          <h2>Latest Updates</h2>
          <a href="/announcements" style={{ color: "rgba(55,63,80,1)" }}>
            See all Updates {`>`}
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexFlow: "wrap",
            justifyContent: "center",
          }}
        >
          <ArticleCard desc={data} />
          <ArticleCard desc={data} />
          <ArticleCard desc={data} />
        </div>
      </div>
    </>
  );
}

export default Home;

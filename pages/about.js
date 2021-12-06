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
<<<<<<< HEAD
        <div className="container">
          <div className="row d-flex ">
            <MainBody />
=======
        <div className="m-md-5 m-2">
          <div className="row d-flex mr-5 ml-5">
            <div className="d-flex  col-12">
              <RelatedLinks />
              <MainBody />
            </div>
>>>>>>> 65cd7cc5a370f02d25de03b29cf5afdd8b4b0ca8
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

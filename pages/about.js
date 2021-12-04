// import HomeCarousel from "../components/UI/HomeCarousel";
// import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";
import MainBody from "../components/UI/MainBody";
// import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/UI/CustomBreadcrumb";
import RelatedLinks from "../components/UI/RelatedLinks";
function Home() {
  return (
    <>
      <div className="Home-content home-display">
        <BreadcrumbComponent />
        <div className="m-md-5 m-2">
          <div className="row d-flex mr-5 ml-5">
            <div className="d-flex  col-12">
              <RelatedLinks></RelatedLinks>
              <MainBody />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

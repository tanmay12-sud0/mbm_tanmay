// import HomeCarousel from "../components/UI/HomeCarousel";
// import Highlights from "../components/UI/Highlights";
// import Layout from "../components/layouts";

import MainBody from "../components/ui/MainBody";

// import Links from "../components/UI/Links";
import BreadcrumbComponent from "../components/ui/CustomBreadcrumb";
import RelatedLinks from "../components/ui/RelatedLinks";
function Home() {
  return (
    <>
      <div>
        <BreadcrumbComponent />
        <div className="container">
          <div className="row d-flex ">
            <MainBody />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
